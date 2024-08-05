import { Injectable } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';
import { App } from '@capacitor/app';

@Injectable({
  providedIn: 'root'
})
export class VersionService {
  private playStoreUrl = 'https://play.google.com/store/apps/details?id=io.tirgo.drive';
  private appStoreUrl = 'https://apps.apple.com/uz/app/tirgo-driver/id6475301095';

  constructor(
    private alertController: AlertController,
    private platform: Platform
  ) { }

  async checkForUpdates(latest) {
    const currentVersion = await this.getCurrentAppVersion();
    if(currentVersion != latest) {
      this.showUpdateAlert();
    }
  }

  private async getCurrentAppVersion(): Promise<string> {
    const appInfo = await App.getInfo();
    return appInfo.version;
  }


  private async showUpdateAlert() {
    const alert = await this.alertController.create({
      header: 'Доступно новое обновление ',
      message: 'Для продолжения работы необходимо обновить приложение',
      buttons: [
        {
          text: 'Обновить',
          handler: () => {
            const url = this.platform.is('android') ? this.playStoreUrl : this.appStoreUrl;
            window.open(url, '_system');
          }
        }
      ],
      backdropDismiss: false
    });
    await alert.present();
  }
}
