"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = exports.playerFactory = exports.HttpLoaderFactory = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/common/http");
var angular_1 = require("@ionic/angular");
var storage_angular_1 = require("@ionic/storage-angular");
var core_2 = require("@ngx-translate/core");
var http_loader_1 = require("@ngx-translate/http-loader");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var common_1 = require("@angular/common");
var lottie_web_1 = require("lottie-web");
var ru_1 = require("@angular/common/locales/ru");
var router_1 = require("@angular/router");
var api_interceptor_1 = require("./services/api.interceptor");
var setraiting_page_1 = require("./setraiting/setraiting.page");
var choice_city_page_1 = require("./choice-city/choice-city.page");
var forms_1 = require("@angular/forms");
var menu_module_1 = require("./menu/menu.module");
var selectstatus_page_1 = require("./selectstatus/selectstatus.page");
var order_page_1 = require("./order/order.page");
var addcontact_page_1 = require("./addcontact/addcontact.page");
var storage_1 = require("@ionic/storage");
common_1.registerLocaleData(ru_1["default"]);
function HttpLoaderFactory(http) {
    return new http_loader_1.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
exports.HttpLoaderFactory = HttpLoaderFactory;
function playerFactory() {
    return lottie_web_1["default"];
}
exports.playerFactory = playerFactory;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                setraiting_page_1.SetraitingPage,
                choice_city_page_1.ChoiceCityPage,
                selectstatus_page_1.SelectstatusPage,
                order_page_1.OrderPage,
                addcontact_page_1.AddcontactPage
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                angular_1.IonicModule.forRoot({ mode: 'ios' }),
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                storage_angular_1.IonicStorageModule.forRoot({
                    name: '__tirgodriver',
                    driverOrder: [storage_1.Drivers.IndexedDB, storage_1.Drivers.LocalStorage]
                }), core_2.TranslateModule.forRoot({
                    loader: {
                        provide: core_2.TranslateLoader,
                        useFactory: HttpLoaderFactory,
                        deps: [http_1.HttpClient]
                    }
                }),
                menu_module_1.MenuPageModule
            ],
            providers: [
                { provide: router_1.RouteReuseStrategy, useClass: angular_1.IonicRouteStrategy },
                { provide: core_1.LOCALE_ID, useValue: 'ru' },
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: api_interceptor_1.ApiInterceptor,
                    multi: true
                },
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
