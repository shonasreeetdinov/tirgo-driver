"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.BalanceServicePage = void 0;
var core_1 = require("@angular/core");
var browser_1 = require("@capacitor/browser");
var BalanceServicePage = /** @class */ (function () {
    function BalanceServicePage(navCtrl, authService, socketService, route, router, cdr) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.socketService = socketService;
        this.route = route;
        this.router = router;
        this.cdr = cdr;
        this.loading = false;
        this.tirLoader = false;
        this.amountLoader = false;
        this.selectmethodpay = 'click';
        this.amount = '';
        this.payConfirm = false;
        this.selectedServices = [];
        this.amount_sum = 0;
        this.formattedData = [];
        this.alpha_balance = 0;
        this.showTgButton = false;
        this.servicesWithSubscription = [];
        this.servicesWithoutSubscription = [];
        this.data = {
            tir: 1,
            currencyCode: '860',
            amount: 1000
        };
        this.exchanges = [
            { Ccy: "UZS", Code: '860' },
            { Ccy: "USD", Code: '840' },
            { Ccy: "KZT", Code: '398' },
            { Ccy: "RUB", Code: '643' },
            { Ccy: "EUR", Code: '978' }
        ];
    }
    BalanceServicePage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParamMap.subscribe(function (params) {
            if (params) {
                _this.subscriptionId = params.get('subscription_id');
            }
        });
        this.getHistory();
        this.checkShowButton();
        this.updateDriverBalance();
        this.getPrice();
        this.socketService.updateTirgoServiceBalance().subscribe(function (res) {
            _this.getPrice();
            _this.getHistory();
            _this.checkShowButton();
            _this.updateDriverBalance();
            _this.cdr.detectChanges();
        });
        this.socketService.updateTirgoServices().subscribe(function (res) {
            _this.getPrice();
            _this.cdr.detectChanges();
        });
        this.getTirBalance();
        this.valueChanged('tir');
    };
    BalanceServicePage.prototype.getHistory = function () {
        var _this = this;
        this.authService.serviceHistory(this.authService.currentUser.id).subscribe(function (res) {
            if (res.status) {
                if (Array.isArray(res.data)) {
                    _this.history = res.data.slice(0, 10);
                }
                else {
                    _this.history = [];
                }
            }
        });
    };
    BalanceServicePage.prototype.getTirBalance = function () {
        var _this = this;
        this.authService.getTirBalance(this.authService.currentUser).subscribe(function (res) {
            if (res && res.status) {
                _this.alpha_balance = res.data.serviceBalance;
            }
        });
    };
    BalanceServicePage.prototype.valueChanged = function (type) {
        var _this = this;
        if (type == 'tir' && this.data.tir) {
            this.tirLoader = true;
            this.data.amount = null;
            this.authService.convertCurrency(this.data).subscribe(function (res) {
                _this.data.amount = +_this.translateString(res.data.amount);
                _this.tirLoader = false;
            }, function (err) {
                _this.tirLoader = false;
            });
        }
        if (type == 'amount' && this.data.amount) {
            this.amountLoader = true;
            this.data.tir = null;
            this.authService.convertCurrency(this.data).subscribe(function (res) {
                _this.data.tir = +_this.translateString(res.data.amount);
                _this.amountLoader = false;
            }, function (err) {
                _this.amountLoader = false;
            });
        }
    };
    BalanceServicePage.prototype.translateString = function (input) {
        var _a;
        var beforeDot, afterDot, afterDotTrimmed;
        if (!isNaN(input) && typeof input === 'string') {
            _a = input.split('.'), beforeDot = _a[0], afterDot = _a[1];
            afterDotTrimmed = afterDot.slice(0, 2);
        }
        return beforeDot + '.' + afterDotTrimmed;
    };
    BalanceServicePage.prototype.segmentChanged = function (event) {
        var selectedSegment = event.detail.value;
        if (selectedSegment === 'subscribe') {
            this.showedServices = this.servicesWithSubscription;
        }
        else if (selectedSegment === 'unsubscribe') {
            this.showedServices = this.servicesWithoutSubscription;
        }
    };
    BalanceServicePage.prototype.getPrice = function () {
        var _this = this;
        this.authService.getServicesList().subscribe(function (res) {
            if (res.status) {
                _this.services = res.data;
                _this.servicesWithoutSubscription = res.data.filter(function (item) { return item.without_subscription; });
                _this.servicesWithSubscription = res.data.filter(function (item) { return !item.without_subscription; });
                _this.showedServices = _this.servicesWithSubscription;
            }
        });
    };
    BalanceServicePage.prototype.selectPrice = function (selectedPriceCard) {
        selectedPriceCard.selected = !selectedPriceCard.selected;
        this.selectedServices = this.services.filter(function (service) { return service.selected; });
        console.log(this.selectedServices);
    };
    BalanceServicePage.prototype.back = function () {
        this.router.navigate(['/tabs/home']);
        this.services.forEach(function (v, k) {
            if (v.selected) {
                v.selected = false;
            }
        });
    };
    BalanceServicePage.prototype.pay = function () {
        return __awaiter(this, void 0, void 0, function () {
            var currentUser, dataSend, dataSend;
            var _this = this;
            return __generator(this, function (_a) {
                this.authService.checkSession().subscribe(function (res) {
                    if (res) {
                        _this.authService.currentUser.group_balance = res.user.groupBalance;
                    }
                });
                this.checkSelectedServices();
                currentUser = this.authService.currentUser;
                if (this.compareSubscription(this.selectedServices)) {
                    if (this.compareWithoutSubscription(this.selectedServices)) {
                        this.formattedData = this.selectedServices.map(function (service) { return ({
                            services_id: service.id,
                            price_uzs: service.price_uzs,
                            price_kzs: service.price_kzs,
                            rate: service.rate,
                            without_subscription: service.without_subscription
                        }); });
                        dataSend = {
                            phone: currentUser.phone,
                            user_id: currentUser.id,
                            services: this.formattedData
                        };
                        this.authService.freeService(dataSend).subscribe(function (res) {
                            if (res.status) {
                                _this.loading = false;
                                _this.getHistory();
                                _this.authService.alertPayAndRedirectTg();
                            }
                        }, function (error) {
                            if (error.error.error === 'Недостаточно средств на балансе') {
                                _this.amount_sum = _this.selectedServices.reduce(function (acc, service) { return acc + Number(service.price_uzs); }, 0);
                                _this.authService.alertAcceptPayment(error.error.error + ', Пополните свой баланс чтобы оформить услугу', _this.selectmethodpay, _this.amount_sum - +_this.alpha_balance);
                                _this.loading = false;
                                _this.amount_sum = 0;
                            }
                            else {
                                _this.loading = false;
                                _this.authService.alert('Ошибка', error.error.error);
                            }
                        });
                    }
                    else {
                        if (!currentUser.issubscription) {
                            this.loading = false;
                            this.authService.alert('Оформите подписку чтобы воспользоваться услугами Тирго', '');
                            this.router.navigate(['/addsubscribe']);
                            return [2 /*return*/];
                        }
                        this.amount_sum = this.selectedServices.reduce(function (acc, service) { return acc + Number(service.price_uzs); }, 0);
                        if (!this.authService.currentUser.driver_group_id && (this.amount_sum > this.alpha_balance)) {
                            this.authService.alertAcceptPayment('Пополните свой баланс чтобы оформить услугу', this.selectmethodpay, this.amount_sum - +this.alpha_balance);
                            this.loading = false;
                            this.amount_sum = 0;
                            return [2 /*return*/];
                        }
                        if (this.authService.currentUser.driver_group_id && (this.amount_sum > this.authService.currentUser.group_balance)) {
                            this.authService.alert('', 'Недостаточно средств на балансе');
                            return [2 /*return*/];
                        }
                        if (this.pendingService) {
                            this.loading = false;
                            this.authService.alertRedirectTg(this.pendingService.name);
                            return [2 /*return*/];
                        }
                        this.formattedData = this.selectedServices.map(function (service) { return ({
                            services_id: service.id,
                            price_uzs: service.price_uzs,
                            price_kzs: service.price_kzs,
                            rate: service.rate,
                            without_subscription: service.without_subscription
                        }); });
                        dataSend = {
                            phone: currentUser.phone,
                            user_id: currentUser.id,
                            services: this.formattedData
                        };
                        this.authService.freeService(dataSend).subscribe(function (res) {
                            if (res.status) {
                                _this.loading = false;
                                _this.getHistory();
                                _this.authService.alertPayAndRedirectTg();
                            }
                        }, function (error) {
                            if (error.error.error === 'Недостаточно средств на балансе') {
                                _this.authService.alert('Ошибка', error.error.error);
                            }
                            else {
                                _this.loading = false;
                                _this.authService.alert('Ошибка', error.error.error);
                            }
                        });
                    }
                }
                else {
                    this.authService.alert('Выберите один вариант:\n  \n\n  Сервисы с подпиской. \n \n \n Сервисы без подписки. \n \n Одновременный выбор невозможен.', '');
                }
                return [2 /*return*/];
            });
        });
    };
    BalanceServicePage.prototype.compareSubscription = function (services) {
        var hasZero = false;
        var hasOne = false;
        for (var _i = 0, services_1 = services; _i < services_1.length; _i++) {
            var service = services_1[_i];
            if (service.without_subscription === 0) {
                hasZero = true;
            }
            else if (service.without_subscription === 1) {
                hasOne = true;
            }
            else {
                return false; // If any value is neither 0 nor 1, return false immediately
            }
        }
        return hasZero !== hasOne ? true : false;
    };
    BalanceServicePage.prototype.compareWithoutSubscription = function (services) {
        for (var _i = 0, services_2 = services; _i < services_2.length; _i++) {
            var service = services_2[_i];
            if (service.without_subscription !== 1) {
                return false;
            }
        }
        return true;
    };
    BalanceServicePage.prototype.checkSelectedServices = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.pendingService = null;
                if (this.formattedData) {
                    this.selectedServices.forEach(function (selectedService) {
                        var result = _this.history.find(function (item) { return item.service_id == selectedService.id && (item.status == 0 || item.status == 1); });
                        if (result) {
                            _this.pendingService = result;
                        }
                        else {
                            _this.pendingService = null;
                        }
                    });
                    return [2 /*return*/, this.pendingService];
                }
                return [2 /*return*/];
            });
        });
    };
    BalanceServicePage.prototype.withdrawFromActivebalance = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.authService.currentUser.balance > 0)) return [3 /*break*/, 1];
                        this.authService.withdrawBalance(this.authService.currentUser.id).subscribe(function (res) {
                            if (res.status) {
                                _this.payConfirm = true;
                            }
                            else if (!res.status && res.error == 'No enough balance') {
                                _this.authService.alert('Ошибка', 'У вас нет активного баланса');
                            }
                            else if (!res.status && res.error == 'No enough balance') {
                                _this.authService.alert('Ошибка', res.error.toString());
                            }
                        });
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.authService.alert('Ошибка', 'У вас нет активного баланса')];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    BalanceServicePage.prototype.updateDriverBalance = function () {
        var _this = this;
        this.socketService.updateDriverBalance().subscribe(function (res) {
            if (res) {
                var data = JSON.parse(res);
                _this.authService.currentUser.balance = data.balance;
                _this.authService.currentUser.balance_off = data.balance_off;
                _this.authService.currentUser.balance_in_proccess = data.balance_in_proccess;
            }
        });
    };
    BalanceServicePage.prototype.checkShowButton = function () {
        var _this = this;
        this.authService.checkService(this.authService.currentUser.id).subscribe(function (res) {
            var _a;
            if (res.status) {
                ((_a = res.data) === null || _a === void 0 ? void 0 : _a.length) > 0 ? _this.showTgButton = true : _this.showTgButton = false;
            }
        });
    };
    BalanceServicePage.prototype.goToSupportAdmin = function () {
        browser_1.Browser.open({ url: 'https://t.me/Tirgo_servrice_bot', windowName: '_system' });
    };
    BalanceServicePage.prototype.doRefresh = function (event) {
        var _this = this;
        setTimeout(function () {
            event.target.complete();
            _this.getHistory();
            _this.getPrice();
        }, 1000);
    };
    BalanceServicePage.prototype.tabChanged = function (ev) {
        this.selectedServices = [];
        this.services = this.services.forEach(function (service) { return service.selected = false; });
        ev.detail.value == 'with' ? this.services = this.servicesWithSubsctription : this.services = this.servicesWithoutSubsctription;
    };
    BalanceServicePage = __decorate([
        core_1.Component({
            selector: 'app-balance',
            templateUrl: './balance-service.page.html',
            styleUrls: ['./balance-service.page.scss']
        })
    ], BalanceServicePage);
    return BalanceServicePage;
}());
exports.BalanceServicePage = BalanceServicePage;
