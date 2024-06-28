import { Injectable } from '@angular/core';
import { Observable, Subject, from } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  //@ts-ignore
  private socket: SocketIOClient.Socket | undefined;
  private socketConnected$: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.connect();
  }

   connect() {
    this.socket = io('https://admin.tirgo.io/', { transports: ['websocket'] });

    this.socket.on('connect', () => {
      console.log('connected');
      this.socketConnected$.next(true);

      this.socket.emit('authenticate', { token: AuthenticationService.jwt })
        .on('authenticated', (data: any) => {
          console.warn('connected to socket');
        })
        .on('unauthorized', (msg: any) => {
          console.log('unauthorized: ' + JSON.stringify(msg.data));
        });
    });

    this.socket.on('disconnect', () => {
      console.log('disconnected');
      this.socketConnected$.next(false);
    });

    this.socket.on('connect_error', (error: any) => {
      console.error('Socket connection error:', error);
      this.socketConnected$.next(false);
    });
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
//@ts-ignore
  private ensureConnected(): Observable<SocketIOClient.Socket> {
    return this.socketConnected$.pipe(
      filter(connected => connected),
    //@ts-ignore
      switchMap(() => from([this.socket as SocketIOClient.Socket]))
    );
  }

  emit(event: string, ...args: any[]) {
    this.ensureConnected().subscribe(socket => {
      socket.emit(event, ...args);
    });
  }

  on(name: string, callback: (data: any) => void) {
    this.ensureConnected().subscribe(socket => {
      socket.on(name, callback);
    });
  }

  private createObservableEvent<T>(eventName: string): Observable<T> {
    return new Observable<T>(observer => {
      this.on(eventName, (data: T) => observer.next(data));
    });
  }

  detectOnline(): Observable<any> {
    return this.createObservableEvent('users-changed');
  }

  updateAllOrders(): Observable<any> {
    return this.createObservableEvent('update-all-list');
  }

  updateAllMessages(): Observable<any> {
    return this.createObservableEvent('update-all-messages');
  }

  updateDriverBalance(): Observable<any> {
    return this.createObservableEvent('update-driver-balance');
  }

  updateTirgoServiceBalance(): Observable<any> {
    return this.createObservableEvent('update-alpha-balance');
  }

  updateTirgoServices(): Observable<any> {
    return this.createObservableEvent('update-services');
  }
}
