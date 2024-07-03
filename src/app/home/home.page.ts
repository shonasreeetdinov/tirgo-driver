import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from "@angular/core";
import {
  AlertController,
  IonRouterOutlet,
  LoadingController,
  ModalController,
} from "@ionic/angular";
import { AuthenticationService } from "../services/authentication.service";
import { OrderPage } from "../order/order.page";
import { AddtransportPage } from "../addtransport/addtransport.page";
import { SocketService } from "../services/socket.service";
import { Geolocation } from "@capacitor/geolocation";
import axios from "axios";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class HomePage implements OnInit {
  file_url = 'https://merchant.tirgo.io/api/v1/file/download/';
  modalAppendOrder: boolean = false;
  modalAppendOrderFull: boolean = false;
  filter: boolean = false;
  vieworder: number = 0;
  //order
  appendorderid: number = 0;
  appendorderdate: string = "";
  add_two_days: boolean = false;
  dates: any[] = [];
  price: string = "";
  selectedtruck: string = '';
  items: any[] = [];
  localItems: any[] = [];
  worldItems: any[] = [];
  selectedType: string = "world";
  loading: any;
  loadingSendButton: boolean = false;
  filteredCityOut: string = "";
  myTruckTypeIds: any;
  loader
  query = { from: 0, limit: 10, transportType: '' }
  loadingOrders
  isRefreshed: boolean = false;
  constructor(
    public authService: AuthenticationService,
    public alertController: AlertController,
    private modalController: ModalController,
    private socketService: SocketService,
    private loadingCtrl: LoadingController,
    private routerOutlet: IonRouterOutlet
  ) { }

  ngOnInit() {
    this.getOrders();
    this.routerOutlet.swipeGesture = false;
    this.socketService.updateAllOrders().subscribe(async (res: any) => {
      this.getOrders();
    });
  }

  async getOrders() {
    this.loadingOrders = true;
    this.authService.getMyOrders(this.query).subscribe(
      (res: any) => {
        if (res) {
          this.items = res;
        }
        this.loadingOrders = false;
      },
      (error) => {
        this.loadingOrders = false;
        console.error('Error fetching orders:', error);
      }
    );
  }
  async loadMoreOrders(event: any) {
    this.query.from = +this.query.from + +this.query.limit
    this.authService.getMyOrders(this.query).subscribe(
      (res: any) => {
        if (res && res.length > 0) {
          this.items = [...this.items, ...res];
          event.target.complete();
        } else {
          event.target.disabled = true;
        }
      },
      (error) => {
        console.error('Error fetching more orders:', error);
        event.target.complete();
      }
    );
  }
  async doRefresh(event: any) {
    this.isRefreshed = true;
    this.selectTypeTransport(this.selectedtruck);
    setTimeout(() => {
      event.target.complete();
      this.isRefreshed = false;
    }, 1000);
  }
  selectType(type: string) {
    this.selectedType = type;
  }
  localOrWorldIsset(id: number) {
    if (this.selectedType === "local") {
      const index = this.localItems.findIndex((e) => e.id === id);
      return index >= 0;
    } else if (this.selectedType === "world") {
      const index = this.worldItems.findIndex((e) => e.id === id);
      return index >= 0;
    } else {
      return false;
    }
  }
  returnNameTypeTransport(type: number) {
    const index = this.authService.typetruck.findIndex((e) => +e.id === +type);
    if (index >= 0) {
      return this.authService.typetruck[index].name;
    } else {
      return "Не выбрано";
    }
  }
  returnNameCargoType(id: number) {
    const index = this.authService.typecargo.findIndex((e) => +e.id === +id);
    if (index >= 0) {
      return this.authService.typecargo[index].name;
    } else {
      return "Не выбрано";
    }
  }
  haveSameContents = (a, b) => {
    if (!a || !b) return false;
    a = a.slice(1, -1).split(",");
    for (const v of new Set([...a, ...b]))
      if (a.filter((e) => +e === v).length !== b.filter((e) => e === v).length)
        return false;
    return true;
  };
  viewOrderInfo(id: number) {
    if (this.vieworder === id) {
      this.vieworder = 0;
    } else {
      this.vieworder = id;
    }
  }
  async acceptOrder(item: any) {
    const modal = await this.modalController.create({
      component: OrderPage,
      canDismiss: true,
      showBackdrop: true,
      breakpoints: [0, 0.9],
      initialBreakpoint: 0.9,
      presentingElement: await this.modalController.getTop(),
      backdropDismiss: true,
      cssClass: "modalCss",
      mode: "ios",
      componentProps: {
        item,
      },
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data && data.accepted) {
      this.authService.myorders = await this.authService
        .getMyOrders({})
        .toPromise();
      // this.items = this.authService.myorders;
      this.getOrders();
    } else {
    }
  }
  findAcceptedOrders(id: number) {
    const index = this.items.findIndex((e) => e.id === id);
    if (index >= 0) {
      const indexuser = this.items[index].orders_accepted.findIndex(
        (user: { id: number }) => user.id === this.authService.currentUser?.id
      );
      return indexuser < 0;
    }
    return true;
  }
  findAcceptedOrdersAndAccepted(id: number) {
    const index = this.items.findIndex((e) => e.id === id);
    if (index >= 0) {
      const indexuser = this.items[index].orders_accepted.findIndex(
        (user: { status_order: Boolean | undefined; id: number | undefined }) =>
          user.id === this.authService.currentUser?.id && user.status_order
      );
      return indexuser < 0;
    }
    return false;
  }
  async appendOrder(item: any) {
    if (this.authService.activeorder) {
      await this.authService.alert(
        "Принятие заказа",
        "К сожалению Вы не можете принять заказ так как не завершили активный."
      );
      this.loading = false;
    } else if (this.authService.currentUser?.dirty === 3) {
      await this.authService.alert(
        "Принятие заказа",
        "К сожалению Вы не можете принять заказ так как ваш аккаунт заблокирован. Обратитесь в службу поддержки для дополнительно информации."
      );
      this.loading = false;
    } else {
      this.loading = false;
      await this.acceptOrder(item);
    }
  }
  openFilter(isOpen: boolean) {
    this.filter = isOpen;
  }
  openModalOrderFull() {
    this.closeModalAll();
    this.modalAppendOrderFull = true;
  }
  closeModalAll() {
    this.modalAppendOrder = false;
    this.modalAppendOrderFull = false;
    this.filter = false;
  }
  returnDay(date: string, num: number) {
    let number: string = (+date.split(".")[0] + +num).toString();
    if (+number < 10) {
      number = "0" + number;
    }
    return number.toString();
  }
  selectDay(ev: any, date: string, num: number) {
    let number: string = (+date.split(".")[0] + +num).toString();
    if (+number < 10) {
      number = "0" + number;
    }
    const index = this.dates.findIndex((e: string) => e === number);
    if (ev.target.checked) {
      if (index < 0) {
        this.dates.push(number);
      }
    } else {
      this.dates.splice(index, 1);
    }
  }
  async sendAcceptOrder() {
    this.loadingSendButton = true;
    this.loading = await this.loadingCtrl.create({
      message: "Проверяем геопозицию",
    });
    this.loading.present();
    Geolocation.getCurrentPosition()
      .then(async (resp) => {
        const get =
          "https://geocode-maps.yandex.ru/1.x/?format=json&geocode=" +
          resp.coords.latitude.toString() +
          "," +
          resp.coords.longitude.toString() +
          "&apikey=" +
          this.authService.currentUser?.config.key_api_maps +
          "&lang=ru-RU";
        axios
          .get(get)
          .then(async (res) => {
            this.closeModalAll();

            if (res.status) {
              this.loading.dismiss();
              this.authService
                .acceptOrder(this.appendorderid, this.price, this.dates, false)
                .toPromise()
                .then((res) => {
                  if (res.data) {
                    this.loading.dismiss();
                    this.loadingSendButton = false;
                    this.closeModalAll();
                  }
                })
                .catch((err) => {
                  this.loading.dismiss();
                  this.loadingSendButton = false;
                  this.closeModalAll();
                });
            }
          })
          .catch(async (error) => {
            this.loading.dismiss();
            this.loadingSendButton = false;
            await this.authService.alert(
              "Ошибка",
              "Для завершения заказа нам нужно знать вашу геопозицию. Пожалуйста включите разрешение на использование местоположения в приложении Tirgo Driver"
            );
          });
      })
      .catch(async (err) => {
        this.loading.dismiss();
        this.loadingSendButton = false;
        await this.authService.alert(
          "Ошибка",
          "Для завершения заказа нам нужно знать вашу геопозицию. Пожалуйста включите разрешение на использование местоположения в приложении Tirgo Driver"
        );
      });
  }
  async cancelOrder(item: any) {
    const alert = await this.alertController.create({
      header: "Внимание",
      message: "Вы действительно хотите отменить заказ?",
      cssClass: "customAlert",
      buttons: [
        {
          text: "Нет",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            console.log("Confirm Cancel");
          },
        },
        {
          text: "Да",
          handler: async () => {
            if (item.isMerchant)
              item.id = item.id.split("M")[1];
            const res = await this.authService.cancelOrder(item).toPromise();
            if (res.status) {
              this.authService.checkSession();
              this.authService.activeorder = null;
              this.getOrders();
            }
          },
        },
      ],
    });
    await alert.present();
  }
  async addTransport() {
    const modal = await this.modalController.create({
      component: AddtransportPage,
      showBackdrop: true,
      breakpoints: [0, 1],
      initialBreakpoint: 1,
      presentingElement: await this.modalController.getTop(),
      backdropDismiss: true,
      cssClass: "modalCss",
      mode: "ios",
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (data) {
    }
  }
  selectTypeTransport(id: string) {
    this.selectedtruck = id;
    this.query = { from: 0, limit: 10, transportType: id };
    this.getOrders();
  }
  filterOrders() {
    this.getOrders();
    this.items = this.items.filter((item) => {
      return item.route.from_city
        .toLowerCase()
        .includes(this.filteredCityOut.toLowerCase());
    });
    this.filter = false;
  }
  filterClose() {
    this.getOrders();
    this.filter = false;
  }
}
