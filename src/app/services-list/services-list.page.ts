import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Browser } from "@capacitor/browser";
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.page.html',
  styleUrls: ['./services-list.page.scss'],
})
export class ServicesListPage implements OnInit {
  loading: boolean = false;
  services: any[] = [];
  selectedServices: any[] = [];
  alpha_balance: number = 0;
  amount_sum: number = 0;
  formattedData: any[] = [];
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private navCtrl: NavController
  ) { }
  ngOnInit(): void {
    this.loading = false;
    this.getServiceList();
    this.getAlphaBalance();
  }
  getServiceList() {
    this.authService.getServicesList().subscribe((res: any) => {
      if (res.status) {
        this.services = res.data;
        // this.selectedServices.push(this.services[0]);        
        // this.services[0].selected = true;
      }
    })
  }
  getAlphaBalance() {
    this.authService.getAlhpaBalance(this.authService.currentUser.id).subscribe((res: any) => {
      if (res.status) {
        this.alpha_balance = res.total_balance;
      }
    })
  }
  selectService(selectedPriceCard) {
    selectedPriceCard.selected = !selectedPriceCard.selected;
    this.selectedServices = this.services.filter(service => service.selected);
  }
  submit() {
    if (!this.authService.currentUser.issubscription) {
      this.loading = false;
      this.authService.alert('Оформите подписку чтобы воспользоваться услугами Тирго', '');
      this.router.navigate(['/addsubscribe'])
    }
    else {
      this.amount_sum = this.selectedServices.reduce((acc, service) => acc + Number(service.price_uzs), 0);
      if (this.amount_sum > this.alpha_balance) {
        this.loading = false;
        let base64 = btoa("m=65dc59df3c319dec9d8c3953;ac.UserID=" + this.authService.currentUser.id + ";a=" + (+this.amount_sum - +this.alpha_balance) + "00");
        Browser.open({url:'https://checkout.paycom.uz/' + base64, windowName: '_system'});
        this.amount_sum = 0;
      }
      else {
        this.formattedData = [];
        this.selectedServices.forEach(service => {
          const formattedService = {
            services_id: service.id,
            price_uzs: service.price_uzs,
            price_kzs: service.price_kzs,
            rate: service.rate,
          };
          this.formattedData.push(formattedService);
        });

        let dataSend = {
          phone: this.authService.currentUser.phone,
          user_id: this.authService.currentUser.id,
          services: this.formattedData
        };
        this.authService.freeService(dataSend).subscribe((res: any) => {
          if (res.status) {
            this.loading = false;
            this.authService.alert('Подписка успешно оформлена !', '');
            this.router.navigate(['/tabs/home'])
          }
        }, error => {
          if (error.error.error = 'Недостаточно средств на балансе') {
            this.loading = false;
            this.router.navigate(['/balance'])
            this.authService.alert('Ошибка', error.error.error);
          }
        })
      }
    }
  }
  back() {
    this.navCtrl.back()
  }
}