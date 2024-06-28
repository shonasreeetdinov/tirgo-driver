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
exports.BalancePage = void 0;
var core_1 = require("@angular/core");
var browser_1 = require("@capacitor/browser");
var BalancePage = /** @class */ (function () {
    function BalancePage(navCtrl, authService, socketService, route) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.socketService = socketService;
        this.route = route;
        this.selectmethodpay = 'click';
        this.payConfirm = false;
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
    BalancePage.prototype.ngOnInit = function () {
        var _this = this;
        this.updateDriverBalance();
        this.getPrice();
        this.route.queryParamMap.subscribe(function (params) {
            if (params) {
                _this.subscriptionId = params.get('subscription_id');
            }
        });
        this.valueChanged('tir');
    };
    BalancePage.prototype.valueChanged = function (type) {
        var _this = this;
        if (type == 'tir') {
            this.data.amount = null;
            this.authService.convertCurrency(this.data).subscribe(function (res) {
                _this.data.amount = +_this.translateString(res.data.amount);
            });
        }
        if (type == 'amount') {
            this.data.tir = null;
            this.authService.convertCurrency(this.data).subscribe(function (res) {
                _this.data.tir = +_this.translateString(res.data.amount);
            });
        }
    };
    BalancePage.prototype.translateString = function (input) {
        var _a = input.split('.'), beforeDot = _a[0], afterDot = _a[1];
        var afterDotTrimmed = afterDot.slice(0, 2);
        return beforeDot + '.' + afterDotTrimmed;
    };
    BalancePage.prototype.getPrice = function () {
        var _this = this;
        this.authService.getSubscribtionsPrice().subscribe(function (res) {
            if (res.status) {
                _this.priceCards = res.data;
                if (_this.subscriptionId) {
                    _this.priceCards = _this.priceCards.filter(function (card) { return card.id == +_this.subscriptionId; });
                }
                if (_this.priceCards.length > 0) {
                    _this.selectPrice(_this.priceCards[0]);
                    _this.selectedPrice = _this.priceCards[0];
                    _this.priceCards[0].selected = true;
                }
            }
        });
    };
    BalancePage.prototype.selectPrice = function (selectedPriceCard) {
        this.priceCards.forEach(function (priceCard) { return priceCard.selected = false; });
        selectedPriceCard.selected = true;
        this.selectedPrice = selectedPriceCard;
        this.selectedPrice.value == 7 ? this.selectedPrice.price = '80000' : this.selectedPrice.price = '180000';
    };
    BalancePage.prototype.getPriceText = function (value) {
        // if (value === 7) {
        //   this.amount = '80000'
        //   return 'Цена: 80 000 сум';
        // } else if (value === 15) {
        //   this.amount = '180000'
        //   return 'Цена: 180 000 сум';
        // } else if (value === 47) {
        //   this.amount = '570000'
        //   return 'Цена: 570 000 сум';
        // } else {
        //   return 'Unknown Price';
        // }
    };
    BalancePage.prototype.back = function () {
        this.navCtrl.back();
    };
    BalancePage.prototype.pay = function () {
        return __awaiter(this, void 0, void 0, function () {
            var base64;
            return __generator(this, function (_a) {
                this.amount = this.selectedPrice.value * 1000;
                if (this.selectmethodpay === 'click') {
                    browser_1.Browser.open({ url: 'https://my.click.uz/services/pay?service_id=24721&merchant_id=17235&amount=' + this.amount + '&transaction_param=' + this.authService.currentUser.id, windowName: '_system' });
                }
                else if (this.selectmethodpay === 'payme') {
                    base64 = btoa("m=636ca5172cfb25761a99e6af;ac.UserID=" + this.authService.currentUser.id + ";a=" + this.amount + "00");
                    browser_1.Browser.open({ url: 'https://checkout.paycom.uz/' + base64, windowName: '_system' });
                }
                return [2 /*return*/];
            });
        });
    };
    BalancePage.prototype.withdrawFromActivebalance = function () {
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
    BalancePage.prototype.updateDriverBalance = function () {
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
    BalancePage = __decorate([
        core_1.Component({
            selector: 'app-balance',
            templateUrl: './balance.page.html',
            styleUrls: ['./balance.page.scss']
        })
    ], BalancePage);
    return BalancePage;
}());
exports.BalancePage = BalancePage;
