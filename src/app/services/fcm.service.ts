import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { ActionPerformed, PushNotifications, PushNotificationSchema, Token } from '@capacitor/push-notifications';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from './storage.service';
import { AuthenticationService } from './authentication.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from "@ionic/storage";

export const FCM_TOKEN = 'push_notification_token';
const TOKEN_KEY = 'jwttirgotoken';

@Injectable({
  providedIn: 'root'
})
export class FcmService {

  private _redirect = new BehaviorSubject<any>(null);

  get redirect() {
    return this._redirect.asObservable();
  }

  constructor(
    private storageService: StorageService,
    private authService: AuthenticationService,
    private http: HttpClient,
    private storage: Storage
  ) { }

  initPush() {
    if (Capacitor.getPlatform() !== 'web') {
      this.registerPush();
    }
  }

  private async registerPush() {
    try {
      await this.addListeners();
      let permStatus = await PushNotifications.checkPermissions();
      console.log("permStatus =",permStatus.receive);
      
      if (permStatus.receive === 'prompt') {
        permStatus = await PushNotifications.requestPermissions();
      }

      if (permStatus.receive !== 'granted') {
        permStatus = await PushNotifications.requestPermissions();
        throw new Error('User denied permissions!');
      }
      await PushNotifications.register();
    } catch (e) {
      console.log(e);
    }
  }

  async getDeliveredNotifications() {
    const notificationList = await PushNotifications.getDeliveredNotifications();
    console.log('Delivered notifications:', notificationList);
  }

  private addListeners() {
    PushNotifications.addListener(
      'registration',
      async (token: Token) => {
        const fcm_token = token?.value;
        this.authService.setFcmToken({userId: this.authService.currentUser.id, fcmToken: fcm_token}).subscribe((res:any) => {})
        let go = 1;
        const saved_token = JSON.parse((await this.storageService.getStorage(FCM_TOKEN)).value);
        if (saved_token) {
          if (fcm_token === saved_token) {
            console.log('Same token');
            go = 0;
          } else {
            go = 2;
          }
        }
        if (go === 1) {
          this.storageService.setStorage(FCM_TOKEN, JSON.stringify(fcm_token));
        } else if (go === 2) {
          const data = {
            expired_token: saved_token,
            refreshed_token: fcm_token
          };
          this.storageService.setStorage(FCM_TOKEN, fcm_token);
        }
      }
    );

    PushNotifications.addListener('registrationError', (error: any) => {
      console.log('Error: ' + JSON.stringify(error));
    });

    PushNotifications.addListener(
      'pushNotificationReceived',
      async (notification: PushNotificationSchema) => {
        console.log('Push received: ' + JSON.stringify(notification));
        const data = notification?.data;
        if (data?.redirect) this._redirect.next(data?.redirect);

        // Custom logic to confirm receipt
        this.confirmNotificationReceipt(notification);
      }
    );

    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      async (notification: ActionPerformed) => {
        const data = notification.notification.data;
        console.log('Action performed: ' + JSON.stringify(notification.notification));
        console.log('Push data: ', data);
        if (data?.redirect) this._redirect.next(data?.redirect);

        // Custom logic to confirm action performed
        this.confirmNotificationActionPerformed(notification);
      }
    );
  }

  private confirmNotificationReceipt(notification: PushNotificationSchema) {
    // Logic to confirm notification receipt
    console.log('Notification received with ID:', notification.id);
    // Optionally, send this confirmation to your server
  }

  private confirmNotificationActionPerformed(notification: ActionPerformed) {
    // Logic to confirm notification action performed
    console.log('Notification action performed with ID:', notification.notification.id);
    // Optionally, send this confirmation to your server
  }

  async removeFcmToken() {
    try {
      const saved_token = JSON.parse((await this.storageService.getStorage(FCM_TOKEN)).value);
      this.storageService.removeStorage(saved_token);
    } catch (e) {
      console.log(e);
      throw (e);
    }
  }
}