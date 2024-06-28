import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "./authentication.service";
import { PushNotifications, Token, PushNotification, PushNotificationActionPerformed } from '@capacitor/push-notifications';

@Injectable({
    providedIn: 'root'
})
export class PushService {

    constructor(
        private router: Router,
        private authService: AuthenticationService,
    ) {
    }

    init() {
        try {
            // Request permission to use push notifications
            PushNotifications.requestPermissions().then(permission => {
                if (permission.receive === 'granted') {
                    console.log('We have permission to send push notifications');

                    // Register with the push notification service
                    PushNotifications.register();
                } else {
                    console.log('We do not have permission to send push notifications');
                }
            });

            // On registration, save the device token
            PushNotifications.addListener('registration', (token: Token) => {
                console.log('saveDeviceToken', token.value);
                this.authService.saveDeviceToken(token.value).subscribe();
            });

            // Handle registration errors
            PushNotifications.addListener('registrationError', (error: any) => {
                console.error('Error with Push plugin', error);
            });

            // Handle push notifications received while the app is running
            PushNotifications.addListener('pushNotificationReceived', (notification: PushNotification) => {
                console.log('Push received: ', notification);
            });

            // Handle action performed on a push notification
            PushNotifications.addListener('pushNotificationActionPerformed', (notification: PushNotificationActionPerformed) => {
                console.log('Push action performed: ', notification);
            });

        } catch (error) {
            console.log(error);
        }
    }
}
