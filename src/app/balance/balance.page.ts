import { Component, OnInit } from '@angular/core';
import { NavController } from "@ionic/angular";
import { AuthenticationService } from "../services/authentication.service";
import { Browser } from "@capacitor/browser";
import { SocketService } from '../services/socket.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.page.html',
  styleUrls: ['./balance.page.scss'],
})
export class BalancePage implements OnInit {
  selectmethodpay: string = 'click'
  amount: number ;
  payConfirm: boolean = false;
  priceCards
  selectedPrice
  subscriptionId: any

  tirCurrency
  data = {
    tir: 1,
    currencyCode: '860',
    amount: 1000
  }
  uzsRate
  kztToUzs
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
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.updateDriverBalance();
    this.getPrice();
    this.route.queryParamMap.subscribe(params => {
      if (params) {
        this.subscriptionId = params.get('subscription_id');
      }
    });
    this.valueChanged('tir')
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
    this.authService.getSubscribtionsPrice().subscribe((res: any) => {
      if (res.status) {
        this.priceCards = res.data;
        if (this.subscriptionId) {
          this.priceCards = this.priceCards.filter(card => card.id == +this.subscriptionId);
        }
        if (this.priceCards.length > 0) {
          this.selectPrice(this.priceCards[0])
          this.selectedPrice = this.priceCards[0]
          this.priceCards[0].selected = true;
        }
      }
    });
  }
  selectPrice(selectedPriceCard: any) {
    this.priceCards.forEach(priceCard => priceCard.selected = false);
    selectedPriceCard.selected = true;
    this.selectedPrice = selectedPriceCard;
    this.selectedPrice.value == 7 ? this.selectedPrice.price = '80000' : this.selectedPrice.price = '180000';
  }
  getPriceText(value: number) {
    // if (value === 7) {
    //   this.amount = '80000'
    //   return 'Цена: 80 000 сум';
    // } else if (value === 15) {
    //   this.amount = '180000'
    //   return 'Цена: 180 000 сум';
    // } else if (value === 47) {
    //   this.amount = '570000'
    //   return 'Цена: 570 000 сум';
    // } else {
    //   return 'Unknown Price';
    // }
  }
  back() {
    this.navCtrl.back()
  }
  async pay() {
     this.amount = this.selectedPrice.value * 1000;
    if (this.selectmethodpay === 'click') {
      Browser.open({url:'https://my.click.uz/services/pay?service_id=24721&merchant_id=17235&amount=' + this.amount + '&transaction_param=' + this.authService.currentUser!.id, windowName:'_system'});
    }
    else if (this.selectmethodpay === 'payme') {
      let base64 = btoa("m=636ca5172cfb25761a99e6af;ac.UserID=" + this.authService.currentUser.id + ";a=" + this.amount + "00");
      Browser.open({url:'https://checkout.paycom.uz/' + base64, windowName:'_system'});
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
}
