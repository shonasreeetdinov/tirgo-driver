"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BalanceServicePageModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var angular_1 = require("@ionic/angular");
var header_module_1 = require("../header/header.module");
var core_2 = require("@ngx-translate/core");
var balance_service_page_1 = require("./balance-service.page");
var balance_service_routing_module_1 = require("./balance-service-routing.module");
var main_pipe_module_1 = require("../pipes/main-pipe.module");
var BalanceServicePageModule = /** @class */ (function () {
    function BalanceServicePageModule() {
    }
    BalanceServicePageModule = __decorate([
        core_1.NgModule({
            declarations: [balance_service_page_1.BalanceServicePage],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                angular_1.IonicModule,
                balance_service_routing_module_1.BalanceServicePageRoutingModule,
                header_module_1.HeaderPageModule,
                core_2.TranslateModule,
                main_pipe_module_1.MainPipeModule
            ]
        })
    ], BalanceServicePageModule);
    return BalanceServicePageModule;
}());
exports.BalanceServicePageModule = BalanceServicePageModule;
