"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ServicesListPage = void 0;
var core_1 = require("@angular/core");
var browser_1 = require("@capacitor/browser");
var ServicesListPage = /** @class */ (function () {
    function ServicesListPage(authService, router, navCtrl) {
        this.authService = authService;
        this.router = router;
        this.navCtrl = navCtrl;
        this.loading = false;
        this.services = [];
        this.selectedServices = [];
        this.alpha_balance = 0;
        this.amount_sum = 0;
        this.formattedData = [];
    }
    ServicesListPage.prototype.ngOnInit = function () {
        this.loading = false;
        this.getServiceList();
        this.getAlphaBalance();
    };
    ServicesListPage.prototype.getServiceList = function () {
        var _this = this;
        this.authService.getServicesList().subscribe(function (res) {
            if (res.status) {
                _this.services = res.data;
                // this.selectedServices.push(this.services[0]);        
                // this.services[0].selected = true;
            }
        });
    };
    ServicesListPage.prototype.getAlphaBalance = function () {
        var _this = this;
        this.authService.getAlhpaBalance(this.authService.currentUser.id).subscribe(function (res) {
            if (res.status) {
                _this.alpha_balance = res.total_balance;
            }
        });
    };
    ServicesListPage.prototype.selectService = function (selectedPriceCard) {
        selectedPriceCard.selected = !selectedPriceCard.selected;
        this.selectedServices = this.services.filter(function (service) { return service.selected; });
    };
    ServicesListPage.prototype.submit = function () {
        var _this = this;
        if (!this.authService.currentUser.issubscription) {
            this.loading = false;
            this.authService.alert('Оформите подписку чтобы воспользоваться услугами Тирго', '');
            this.router.navigate(['/addsubscribe']);
        }
        else {
            this.amount_sum = this.selectedServices.reduce(function (acc, service) { return acc + Number(service.price_uzs); }, 0);
            if (this.amount_sum > this.alpha_balance) {
                this.loading = false;
                var base64 = btoa("m=65dc59df3c319dec9d8c3953;ac.UserID=" + this.authService.currentUser.id + ";a=" + (+this.amount_sum - +this.alpha_balance) + "00");
                browser_1.Browser.open({ url: 'https://checkout.paycom.uz/' + base64, windowName: '_system' });
                this.amount_sum = 0;
            }
            else {
                this.formattedData = [];
                this.selectedServices.forEach(function (service) {
                    var formattedService = {
                        services_id: service.id,
                        price_uzs: service.price_uzs,
                        price_kzs: service.price_kzs,
                        rate: service.rate
                    };
                    _this.formattedData.push(formattedService);
                });
                var dataSend = {
                    phone: this.authService.currentUser.phone,
                    user_id: this.authService.currentUser.id,
                    services: this.formattedData
                };
                this.authService.freeService(dataSend).subscribe(function (res) {
                    if (res.status) {
                        _this.loading = false;
                        _this.authService.alert('Подписка успешно оформлена !', '');
                        _this.router.navigate(['/tabs/home']);
                    }
                }, function (error) {
                    if (error.error.error = 'Недостаточно средств на балансе') {
                        _this.loading = false;
                        _this.router.navigate(['/balance']);
                        _this.authService.alert('Ошибка', error.error.error);
                    }
                });
            }
        }
    };
    ServicesListPage.prototype.back = function () {
        this.navCtrl.back();
    };
    ServicesListPage = __decorate([
        core_1.Component({
            selector: 'app-services-list',
            templateUrl: './services-list.page.html',
            styleUrls: ['./services-list.page.scss']
        })
    ], ServicesListPage);
    return ServicesListPage;
}());
exports.ServicesListPage = ServicesListPage;
