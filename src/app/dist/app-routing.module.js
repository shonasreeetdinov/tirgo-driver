"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var routes = [
    {
        path: '',
        redirectTo: 'loading',
        pathMatch: 'full'
    },
    {
        path: 'tabs',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./tabs/tabs.module'); }).then(function (m) { return m.TabsPageModule; }); }
    },
    {
        path: 'welcome',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./welcome/welcome.module'); }).then(function (m) { return m.WelcomePageModule; }); }
    },
    {
        path: 'loading',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./loading/loading.module'); }).then(function (m) { return m.LoadingPageModule; }); }
    },
    {
        path: 'login',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./auth/login/login.module'); }).then(function (m) { return m.LoginPageModule; }); }
    },
    {
        path: 'selectlanguage',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./selectlanguage/selectlanguage.module'); }).then(function (m) { return m.SelectlanguagePageModule; }); }
    },
    {
        path: 'recoverlogin',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./auth/recoverlogin/recoverlogin.module'); }).then(function (m) { return m.RecoverloginPageModule; }); }
    },
    {
        path: 'header',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./header/header.module'); }).then(function (m) { return m.HeaderPageModule; }); }
    },
    {
        path: 'balance',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./balance/balance.module'); }).then(function (m) { return m.BalancePageModule; }); }
    },
    {
        path: 'balance-service',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./balance-service/balance-service.module'); }).then(function (m) { return m.BalanceServicePageModule; }); }
    },
    {
        path: 'mysubscribers',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./mysubscribers/mysubscribers.module'); }).then(function (m) { return m.MysubscribersPageModule; }); }
    },
    {
        path: 'notify',
        children: [
            {
                path: '',
                loadChildren: function () { return Promise.resolve().then(function () { return require('./notify/notify.module'); }).then(function (m) { return m.NotifyPageModule; }); }
            },
            {
                path: 'notifyview/:id',
                loadChildren: function () { return Promise.resolve().then(function () { return require('./notifyview/notifyview.module'); }).then(function (m) { return m.NotifyviewPageModule; }); }
            },
        ]
    },
    {
        path: 'support',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./support/support.module'); }).then(function (m) { return m.SupportPageModule; }); }
    },
    {
        path: 'services-list',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./services-list/services-list.module'); }).then(function (m) { return m.ServicesListModule; }); }
    },
    {
        path: 'name',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./auth/name/name.module'); }).then(function (m) { return m.NamePageModule; }); }
    },
    {
        path: 'addtransport',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./addtransport/addtransport.module'); }).then(function (m) { return m.AddtransportPageModule; }); }
    },
    {
        path: 'edittransport',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./edittransport/edittransport.module'); }).then(function (m) { return m.EdittransportPageModule; }); }
    },
    {
        path: 'nointernet',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./nointernet/nointernet.module'); }).then(function (m) { return m.NointernetPageModule; }); }
    },
    {
        path: 'selectlanguageauth',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./selectlanguageauth/selectlanguageauth.module'); }).then(function (m) { return m.SelectlanguageauthPageModule; }); }
    },
    {
        path: 'recoverlogin',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./auth/recoverlogin/recoverlogin.module'); }).then(function (m) { return m.RecoverloginPageModule; }); }
    },
    {
        path: 'header',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./header/header.module'); }).then(function (m) { return m.HeaderPageModule; }); }
    },
    {
        path: 'balance',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./balance/balance.module'); }).then(function (m) { return m.BalancePageModule; }); }
    },
    {
        path: 'mysubscribers',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./mysubscribers/mysubscribers.module'); }).then(function (m) { return m.MysubscribersPageModule; }); }
    },
    {
        path: 'notify',
        children: [
            {
                path: '',
                loadChildren: function () { return Promise.resolve().then(function () { return require('./notify/notify.module'); }).then(function (m) { return m.NotifyPageModule; }); }
            },
            {
                path: 'notifyview/:id',
                loadChildren: function () { return Promise.resolve().then(function () { return require('./notifyview/notifyview.module'); }).then(function (m) { return m.NotifyviewPageModule; }); }
            },
        ]
    },
    {
        path: 'support',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./support/support.module'); }).then(function (m) { return m.SupportPageModule; }); }
    },
    {
        path: 'name',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./auth/name/name.module'); }).then(function (m) { return m.NamePageModule; }); }
    },
    {
        path: 'addtransport',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./addtransport/addtransport.module'); }).then(function (m) { return m.AddtransportPageModule; }); }
    },
    {
        path: 'edittransport',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./edittransport/edittransport.module'); }).then(function (m) { return m.EdittransportPageModule; }); }
    },
    {
        path: 'verification',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./verification/verification.module'); }).then(function (m) { return m.VerificationPageModule; }); }
    },
    {
        path: 'addsubscribe',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./addsubscribe/addsubscribe.module'); }).then(function (m) { return m.AddSubscribeModule; }); }
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes, { preloadingStrategy: router_1.PreloadAllModules })
            ],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
