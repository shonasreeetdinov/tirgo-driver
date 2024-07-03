import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { registerLocaleData } from '@angular/common';
import player from 'lottie-web';
import localeRu from '@angular/common/locales/ru';
import { RouteReuseStrategy } from '@angular/router';
import { ApiInterceptor } from './services/api.interceptor';
import { SetraitingPage } from './setraiting/setraiting.page';
import { ChoiceCityPage } from './choice-city/choice-city.page';
import { FormsModule } from '@angular/forms';
import { MenuPageModule } from './menu/menu.module';
import { SelectstatusPage } from './selectstatus/selectstatus.page';
import { OrderPage } from './order/order.page';
import { AddcontactPage } from './addcontact/addcontact.page';
import { Drivers } from '@ionic/storage';

registerLocaleData(localeRu);
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
export function playerFactory() {
  return player;
}
@NgModule({
  declarations: [
    AppComponent,
    SetraitingPage,
    ChoiceCityPage,
    SelectstatusPage,
    OrderPage,
    AddcontactPage
  ],

  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot({ mode: 'ios' }),
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot({
      name: '__tirgodriver',
      driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage],
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MenuPageModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: LOCALE_ID, useValue: 'ru' },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
