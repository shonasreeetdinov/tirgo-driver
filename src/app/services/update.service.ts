import { Injectable } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';
import { AppUpdate, AppUpdateInfo } from '@capawesome/capacitor-app-update';
import { Browser } from '@capacitor/browser';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  constructor(private alertController: AlertController, private platform: Platform) {}

  async checkForUpdates() {
    if (this.platform.is('capacitor')) {
      try {
        const updateInfo: any = await AppUpdate.getAppUpdateInfo();

        if (updateInfo.updateAvailability === 'UPDATE_AVAILABLE') {
          this.showUpdateAlert();
        }
      } catch (error:any) {
        console.error('Ошибка при проверке обновлений', error);

        // if (error.message.includes('ERROR_APP_NOT_OWNED')) {
        //   this.showDownloadFromPlayStoreAlert();
        // }
      }
    }
  }
  async showUpdateAlert() {
    const alert = await this.alertController.create({
      header: 'Доступно обновление',
      message: 'Доступна новая версия приложения. Пожалуйста, обновитесь для продолжения работы.',
      buttons: [
        {
          text: 'Обновить',
          handler: () => {
            this.redirectToPlayStore();
          }
        }
      ],
      backdropDismiss: false
    });
    await alert.present();
  }
  async showDownloadFromPlayStoreAlert() {
    const alert = await this.alertController.create({
      header: 'Загрузите приложение из Play Store',
      message: 'Для использования этой функции, пожалуйста, загрузите приложение из Play Store.',
      buttons: ['OK'],
      backdropDismiss: false
    });

    await alert.present();
  }
  async redirectToPlayStore() {
    const appPackageName = 'io.tirgo.drive';
    await Browser.open({ url: `https://play.google.com/store/apps/details?id=${appPackageName}` });
  }
}
