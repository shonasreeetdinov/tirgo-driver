import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavController } from "@ionic/angular";
import { AuthenticationService } from "../services/authentication.service";
import { Browser } from "@capacitor/browser";
import { SocketService } from '../services/socket.service';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-balance',
  templateUrl: './balance-service.page.html',
  styleUrls: ['./balance-service.page.scss'],
})
export class BalanceServicePage implements OnInit {

  loading: boolean = false;
  services
  selectmethodpay: string = 'click'
  amount: string = '';
  payConfirm: boolean = false;
  priceCards
  selectedPrice
  selectedServices: any[] = [];
  subscriptionId: any;
  amount_sum: number = 0;
  formattedData: any[] = [];
  alpha_balance: number = 0;
  history: any;
  showTgButton: boolean = false;
  servicesWithSubscription: any[] = [];
  servicesWithoutSubscription: any[] = [];
  pendingService: any;

  tirCurrency
  kztToUzs
  data = {
    tir: 1,
    currencyCode: '860',
    amount: 1000
  }
  servicesWithoutSubsctription;
  servicesWithSubsctription
  exchanges: any[] = [
    { Ccy: "UZS", Code: '860' },
    { Ccy: "USD", Code: '840' },
    { Ccy: "KZT", Code: '398' },
    { Ccy: "RUB", Code: '643' },
    { Ccy: "EUR", Code: '978' }
  ];
  constructor(
    private navCtrl: NavController,
    public authService: AuthenticationService,
    public socketService: SocketService,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      if (params) {
        this.subscriptionId = params.get('subscription_id');
      }
    });
    this.getHistory();
    this.checkShowButton();
    this.updateDriverBalance();
    this.getPrice();
    this.socketService.updateTirgoServiceBalance().subscribe((res: any) => {
      this.getPrice();
      this.getHistory();
      this.checkShowButton();
      this.updateDriverBalance();
      this.cdr.detectChanges();
    });
    this.socketService.updateTirgoServices().subscribe((res: any) => {
      this.getPrice();
      this.cdr.detectChanges();
    });
    this.getTirBalance();
    this.valueChanged('tir')
  }

  getHistory() {
    this.authService.serviceHistory(this.authService.currentUser.id).subscribe((res: any) => {
      if (res.status) {
        if (Array.isArray(res.data)) {
          this.history = res.data.slice(0, 10);
        } else {
          this.history = [];
        }
      }
    });
  }
  getTirBalance() {
    this.authService.getTirBalance(this.authService.currentUser).subscribe((res: any) => {
      if (res && res.status) {
        this.alpha_balance = res.data.serviceBalance
      }
    })
  }

  valueChanged(type) {
    if (type == 'tir') {
      this.data.amount = null;
      this.authService.convertCurrency(this.data).subscribe((res: any) => {
        this.data.amount = +this.translateString(res.data.amount);
      })
    }
    if (type == 'amount') {
      this.data.tir = null;
      this.authService.convertCurrency(this.data).subscribe((res: any) => {
        this.data.tir = +this.translateString(res.data.amount);
      })
    }
  }
 
  translateString(input) {
    const [beforeDot, afterDot] = input.split('.');
    const afterDotTrimmed = afterDot.slice(0, 2);
    return beforeDot + '.' + afterDotTrimmed;
  }

  getPrice() {
    this.authService.getServicesList().subscribe((res: any) => {
      if (res.status) {
        this.services = res.data;
        this.servicesWithoutSubsctription = res.data.filter(item => item.without_subscription);
        this.servicesWithSubsctription = res.data.filter(item => !item.without_subscription);
        this.services = this.servicesWithSubsctription;
      }
    })
  }
  selectPrice(selectedPriceCard: any) {
    selectedPriceCard.selected = !selectedPriceCard.selected;
    this.selectedServices = this.services.filter(service => service.selected);
    console.log(this.selectedServices);

  }
  back() {
    this.router.navigate(['/tabs/home']);
    this.services.forEach((v, k) => {
      if (v.selected) {
        v.selected = false;
      }
    })
  }
  async pay() {
    this.authService.checkSession().subscribe((res: any) => {
      if (res) {
        this.authService.currentUser.group_balance = res.user.groupBalance;
      }
    });
    this.checkSelectedServices();
    let currentUser = this.authService.currentUser;
    if (this.compareSubscription(this.selectedServices)) {
      if (this.compareWithoutSubscription(this.selectedServices)) {
        this.formattedData = this.selectedServices.map(service => ({
          services_id: service.id,
          price_uzs: service.price_uzs,
          price_kzs: service.price_kzs,
          rate: service.rate,
          without_subscription: service.without_subscription
        }));

        const dataSend = {
          phone: currentUser.phone,
          user_id: currentUser.id,
          services: this.formattedData
        };

        this.authService.freeService(dataSend).subscribe((res: any) => {
          if (res.status) {
            this.loading = false;
            this.getHistory();

            this.authService.alertPayAndRedirectTg();
          }
        }, error => {
          if (error.error.error === 'Недостаточно средств на балансе') {
            this.amount_sum = this.selectedServices.reduce((acc, service) => acc + Number(service.price_uzs), 0);
            this.authService.alertAcceptPayment(error.error.error + ', Пополните свой баланс чтобы оформить услугу', this.selectmethodpay, this.amount_sum - +this.alpha_balance);
            this.loading = false;
            this.amount_sum = 0;
          }
          else {
            this.loading = false;
            this.authService.alert('Ошибка', error.error.error);
          }
        });
      }
      else {
        if (!currentUser.issubscription) {
          this.loading = false;
          this.authService.alert('Оформите подписку чтобы воспользоваться услугами Тирго', '');
          this.router.navigate(['/addsubscribe']);
          return;
        }
        this.amount_sum = this.selectedServices.reduce((acc, service) => acc + Number(service.price_uzs), 0);
        if (!this.authService.currentUser.driver_group_id && (this.amount_sum > this.alpha_balance)) {
          this.authService.alertAcceptPayment('Пополните свой баланс чтобы оформить услугу', this.selectmethodpay, this.amount_sum - +this.alpha_balance);
          this.loading = false;
          this.amount_sum = 0;
          return;
        }
        if (this.authService.currentUser.driver_group_id && (this.amount_sum > this.authService.currentUser.group_balance)) {
          this.authService.alert('', 'Недостаточно средств на балансе')
          return;
        }
        if (this.pendingService) {
          this.loading = false;
          this.authService.alertRedirectTg(this.pendingService.name);
          return;
        }
        this.formattedData = this.selectedServices.map(service => ({
          services_id: service.id,
          price_uzs: service.price_uzs,
          price_kzs: service.price_kzs,
          rate: service.rate,
          without_subscription: service.without_subscription
        }));

        const dataSend = {
          phone: currentUser.phone,
          user_id: currentUser.id,
          services: this.formattedData
        };

        this.authService.freeService(dataSend).subscribe((res: any) => {
          if (res.status) {
            this.loading = false;
            this.getHistory();
            this.authService.alertPayAndRedirectTg();
          }
        }, error => {
          if (error.error.error === 'Недостаточно средств на балансе') {
            this.authService.alert('Ошибка', error.error.error);
          }
          else {
            this.loading = false;
            this.authService.alert('Ошибка', error.error.error);
          }
        });
      }
    }
    else {
      this.authService.alert('Выберите один вариант:\n  \n\n  Сервисы с подпиской. \n \n \n Сервисы без подписки. \n \n Одновременный выбор невозможен.', '')
    }
  }
  compareSubscription(services): boolean {
    let hasZero = false;
    let hasOne = false;

    for (let service of services) {
      if (service.without_subscription === 0) {
        hasZero = true;
      } else if (service.without_subscription === 1) {
        hasOne = true;
      } else {
        return false; // If any value is neither 0 nor 1, return false immediately
      }
    }

    return hasZero !== hasOne ? true : false;
  }
  compareWithoutSubscription(services): boolean {
    for (let service of services) {
      if (service.without_subscription !== 1) {
        return false;
      }
    }
    return true;
  }
  async checkSelectedServices() {
    this.pendingService = null;
    if (this.formattedData) {
      this.selectedServices.forEach(selectedService => {
        const result = this.history.find(item => item.service_id == selectedService.id && (item.status == 0 || item.status == 1));
        if (result) {
          this.pendingService = result;
        }
        else {
          this.pendingService = null;
        }
      });
      return this.pendingService
    }
  }
  async withdrawFromActivebalance() {
    if (this.authService.currentUser.balance > 0) {
      this.authService.withdrawBalance(this.authService.currentUser.id).subscribe((res: any) => {
        if (res.status) {
          this.payConfirm = true;
        }
        else if (!res.status && res.error == 'No enough balance') {
          this.authService.alert('Ошибка', 'У вас нет активного баланса')
        }
        else if (!res.status && res.error == 'No enough balance') {
          this.authService.alert('Ошибка', res.error.toString());
        }
      });
    } else {
      await this.authService.alert('Ошибка', 'У вас нет активного баланса')
    }
  }
  updateDriverBalance() {
    this.socketService.updateDriverBalance().subscribe((res: any) => {
      if (res) {
        const data = JSON.parse(res);
        this.authService.currentUser.balance = data.balance;
        this.authService.currentUser.balance_off = data.balance_off;
        this.authService.currentUser.balance_in_proccess = data.balance_in_proccess;
      }
    })
  }
  checkShowButton() {
    this.authService.checkService(this.authService.currentUser.id).subscribe((res: any) => {
      if (res.status) {
        res.data?.length > 0 ? this.showTgButton = true : this.showTgButton = false;
      }
    })
  }
  goToSupportAdmin() {
    Browser.open({url:'https://t.me/Tirgo_servrice_bot', windowName:'_system'});
  }
  doRefresh(event) {
    setTimeout(() => {
      event.target.complete();
      this.getHistory();
      this.getPrice();
    }, 1000);
  }
  tabChanged(ev) {
    this.selectedServices = []
    this.services = this.services.forEach(service => service.selected = false);
    ev.detail.value == 'with' ? this.services = this.servicesWithSubsctription : this.services = this.servicesWithoutSubsctription;
  }
}
