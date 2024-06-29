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
exports.OrderPage = void 0;
var core_1 = require("@angular/core");
var axios_1 = require("axios");
var geolocation_1 = require("@capacitor/geolocation");
var addtransport_page_1 = require("../addtransport/addtransport.page");
var OrderPage = /** @class */ (function () {
    function OrderPage(authService, loadingCtrl, alertController, modalController, router) {
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.alertController = alertController;
        this.modalController = modalController;
        this.router = router;
        this.loadingAccept = false;
        this.price = '';
        this.selecteddays = [];
    }
    OrderPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.authService.checkGeolocation();
                return [2 /*return*/];
            });
        });
    };
    OrderPage.prototype.acceptOrderFinalAccept = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cityOrder, cityUser, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.loadingAccept = true;
                        cityOrder = '';
                        cityUser = '';
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Проверяем геопозицию'
                            })];
                    case 1:
                        _a.loading = _b.sent();
                        this.loading.present();
                        geolocation_1.Geolocation.getCurrentPosition({
                            maximumAge: 1000, timeout: 5000,
                            enableHighAccuracy: true
                        })
                            .then(function (res) {
                            var _a;
                            _this.loadingAccept = true;
                            var get = "https://geocode-maps.yandex.ru/1.x/?format=json&geocode=" + res.coords.longitude.toString() + "," + res.coords.latitude.toString() + "&apikey=" + ((_a = _this.authService.currentUser) === null || _a === void 0 ? void 0 : _a.config.key_api_maps) + "&lang=ru-RU";
                            axios_1["default"].get(get)
                                .then(function (res) { return __awaiter(_this, void 0, void 0, function () {
                                var acceptRes, _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!res.status) return [3 /*break*/, 8];
                                            this.loading.dismiss();
                                            cityUser = res.data.response.GeoObjectCollection.featureMember[0].GeoObject.description.split(',')[res.data.response.GeoObjectCollection.featureMember[0].GeoObject.description.split(',').length - 1].replace(' ', '');
                                            cityOrder = this.item.route.from_city.split(',')[1].replace(' ', '');
                                            if (!(cityUser === cityOrder)) return [3 /*break*/, 5];
                                            if (this.item.isMerchant) {
                                                this.item.id = +this.item.id.split('M')[1];
                                            }
                                            return [4 /*yield*/, this.authService.acceptOrder(this.item.id, this.price, this.selecteddays, this.item.isMerchant).toPromise()];
                                        case 1:
                                            acceptRes = _b.sent();
                                            if (!acceptRes.status) return [3 /*break*/, 4];
                                            _a = this.authService;
                                            return [4 /*yield*/, this.authService.getMyOrders({ from: 0, limit: 50, transportType: '' }).toPromise()];
                                        case 2:
                                            _a.myorders = _b.sent();
                                            return [4 /*yield*/, this.modalController.dismiss({
                                                    accepted: true
                                                })];
                                        case 3:
                                            _b.sent();
                                            _b.label = 4;
                                        case 4: return [3 /*break*/, 8];
                                        case 5: return [4 /*yield*/, this.authService.alert('Ошибка', 'К сожалению Вы не можете принять заказ. Вы не находитесь в городе отправки груза.')];
                                        case 6:
                                            _b.sent();
                                            return [4 /*yield*/, this.modalController.dismiss({
                                                    accepted: false
                                                })];
                                        case 7:
                                            _b.sent();
                                            _b.label = 8;
                                        case 8: return [2 /*return*/];
                                    }
                                });
                            }); });
                        }, function (error) {
                            if (error.message == 'User denied Geolocation') {
                                _this.loading.dismiss();
                                _this.loadingAccept = false;
                                _this.authService.alertLocation('Упс', 'Для получения заказов нам нужно знать вашу геопозицию. Пожалуйста включите разрешение на использование местоположения в приложении Tirgo Driver');
                            }
                            else {
                                _this.loading.dismiss();
                                _this.loadingAccept = false;
                                _this.authService.alertLocation('Упс', 'Пожалуйста включите разрешение на использование местоположения в приложении Tirgo Driver');
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    OrderPage.prototype.acceptOrderFinal = function () {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet, alert;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(this.item.secure_transaction && !((_a = this.authService.currentUser) === null || _a === void 0 ? void 0 : _a.driver_verification) && !((_b = this.authService.currentUser) === null || _b === void 0 ? void 0 : _b.send_verification))) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Вы должны идентифицироваться чтобы иметь возможность  совершать “Безопасеые сделки',
                                cssClass: 'custom-alert',
                                buttons: [
                                    {
                                        text: 'OK',
                                        cssClass: 'icon-alert-button',
                                        handler: function () { return __awaiter(_this, void 0, void 0, function () {
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: return [4 /*yield*/, this.router.navigate(['/notify'])];
                                                    case 1:
                                                        _a.sent();
                                                        return [4 /*yield*/, this.modalController.dismiss({
                                                                accepted: true
                                                            })];
                                                    case 2:
                                                        _a.sent();
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); }
                                    }
                                ]
                            })];
                    case 1:
                        actionSheet = _c.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _c.sent();
                        return [3 /*break*/, 8];
                    case 3:
                        this.loadingAccept = true;
                        if (!this.price) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Внимание',
                                message: 'Вы действительно хотите отправить предложение?',
                                cssClass: 'customAlert',
                                buttons: [
                                    {
                                        text: 'Нет',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function () {
                                            _this.loadingAccept = false;
                                            console.log('Confirm Cancel');
                                        }
                                    }, {
                                        text: 'Да',
                                        handler: function () {
                                            _this.acceptOrderFinalAccept();
                                        }
                                    }
                                ]
                            })];
                    case 4:
                        alert = _c.sent();
                        return [4 /*yield*/, alert.present()];
                    case 5:
                        _c.sent();
                        return [3 /*break*/, 8];
                    case 6: return [4 /*yield*/, this.authService.alert('Упс', 'Требуется указать цену Ваше предложение по цене.')];
                    case 7:
                        _c.sent();
                        this.loadingAccept = false;
                        _c.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    OrderPage.prototype.findDay = function (num) {
        var index = this.selecteddays.findIndex(function (e) { return e === num; });
        return index >= 0;
    };
    OrderPage.prototype.selectDay = function (num) {
        var index = this.selecteddays.findIndex(function (e) { return e === num; });
        if (index >= 0) {
            this.selecteddays.splice(index, 1);
        }
        else {
            this.selecteddays.push(num);
        }
    };
    OrderPage.prototype.addTransport = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal, _a, _b, _c, data;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _b = (_a = this.modalController).create;
                        _c = {
                            component: addtransport_page_1.AddtransportPage,
                            showBackdrop: true,
                            breakpoints: [0, 1],
                            initialBreakpoint: 1
                        };
                        return [4 /*yield*/, this.modalController.getTop()];
                    case 1: return [4 /*yield*/, _b.apply(_a, [(_c.presentingElement = _d.sent(),
                                _c.backdropDismiss = true,
                                _c.cssClass = 'modalCss',
                                _c.mode = 'ios',
                                _c)])];
                    case 2:
                        modal = _d.sent();
                        return [4 /*yield*/, modal.present()];
                    case 3:
                        _d.sent();
                        return [4 /*yield*/, modal.onWillDismiss()];
                    case 4:
                        data = (_d.sent()).data;
                        if (data) {
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        core_1.Input('item')
    ], OrderPage.prototype, "item");
    OrderPage = __decorate([
        core_1.Component({
            selector: 'app-order',
            templateUrl: './order.page.html',
            styleUrls: ['./order.page.scss']
        })
    ], OrderPage);
    return OrderPage;
}());
exports.OrderPage = OrderPage;
