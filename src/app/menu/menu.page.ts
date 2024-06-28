import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController, ModalController } from "@ionic/angular";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";
import { AuthenticationService } from "../services/authentication.service";
import { Geolocation } from "@capacitor/geolocation";
import axios from "axios";
import { SelectstatusPage } from "../selectstatus/selectstatus.page";
import { Browser } from "@capacitor/browser";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  modalExit: boolean = false;
  driver_verification: number
  constructor(
    public alertController: AlertController,
    private menu: MenuController,
    private storage: Storage,
    private modalController: ModalController,
    private router: Router,
    public authService: AuthenticationService,
  ) { }

  ngOnInit() {
  }
  async logOut() {
    this.menu.toggle();
    //this.modalExit = true;
    const alert = await this.alertController.create({
      header: 'Вы уверены?',
      message: 'Вы действительно хотите выйти?',
      cssClass: 'customAlert',
      buttons: [
        {
          text: 'Нет',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Выйти',
          role: 'destructive',
          handler: async () => {
            await this.logOutFull()
          }
        }
      ]
    });
    await alert.present();
  }
  async closeModal() {
    this.modalExit = false;
  }
  returnStatusName() {
    const index = this.authService.statuses.findIndex(e => e.status_id === this.authService.currentUser.busy)
    if (index >= 0) {
      return this.authService.statuses[index].name
    }
  }
  async logOutFull() {
    await this.storage.clear();
    await this.authService.logout();
    await this.closeModal()
    await this.router.navigate(['selectlanguage'], { replaceUrl: true });
  }
  async goTo(page: string, replace: boolean) {
    await this.router.navigate([page], { replaceUrl: replace });
    await this.menu.toggle();
  }
  updateLocation() {
    Geolocation.getCurrentPosition().then(async (resp) => {
      await this.authService.updateLocation(resp.coords.latitude.toString(), resp.coords.longitude.toString()).toPromise();
      const get = "https://geocode-maps.yandex.ru/1.x/?format=json&geocode=" + resp.coords.longitude.toString() + "," + resp.coords.latitude.toString() + "&apikey=" + this.authService.currentUser?.config.key_api_maps + "&lang=ru-RU"
      axios.get(get)
        .then(res => {
          if (res.status) {
            this.authService.cityinfo = res.data.response.GeoObjectCollection.featureMember[0].GeoObject.description;
          }
        })
        .catch(async (error) => {
          await this.authService.alert('Ошибка', 'Для завершения заказа нам нужно знать вашу геопозицию. Пожалуйста включите разрешение на использование местоположения в приложении Tirgo Driver')
        });
    })
  }
  async selectStatus() {
    const modal = await this.modalController.create({
      component: SelectstatusPage,
      showBackdrop: true,
      breakpoints: [0, 0.5],
      initialBreakpoint: 0.5,
      presentingElement: await this.modalController.getTop(),
      backdropDismiss: true,
      cssClass: 'modalCss',
      mode: 'ios',
    });
    await modal.present();
  }
  async goToSupportAdmin() {
    if (!this.authService.currentUser.to_subscription) {
      this.authService.alertSubscription('Необходимо подключить подписку для этой услуги', '')
      await this.menu.toggle();
    } else {
      Browser.open({url:'https://t.me/TIRGO_STOL_USLUG', windowName: '_system'});
      await this.menu.toggle();
    }
  }
}
