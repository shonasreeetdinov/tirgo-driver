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
exports.ActiveorderPage = void 0;
var core_1 = require("@angular/core");
var geolocation_1 = require("@capacitor/geolocation");
var setraiting_page_1 = require("../setraiting/setraiting.page");
var capacitor_call_number_1 = require("capacitor-call-number");
var ActiveorderPage = /** @class */ (function () {
    function ActiveorderPage(authService, loadingCtrl, 
    // private callNumber: CallNumber,
    alertController, platform, router, modalCtrl) {
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.alertController = alertController;
        this.platform = platform;
        this.router = router;
        this.modalCtrl = modalCtrl;
    }
    ActiveorderPage.prototype.ngOnInit = function () {
        this.item = this.authService.activeorder;
        // this.item.transport_types = JSON.parse(this.item.transport_types);
    };
    ActiveorderPage.prototype.finishOrder = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Вы уверены?',
                            message: 'Вы действительно хотите завершить заказ?',
                            cssClass: 'customAlert',
                            buttons: [
                                {
                                    text: 'Нет',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'Да',
                                    handler: function () { return __awaiter(_this, void 0, void 0, function () {
                                        var _a;
                                        var _this = this;
                                        return __generator(this, function (_b) {
                                            switch (_b.label) {
                                                case 0: return [4 /*yield*/, alert.present()];
                                                case 1:
                                                    _b.sent();
                                                    _a = this;
                                                    return [4 /*yield*/, this.loadingCtrl.create({
                                                            message: 'Завершаем заказ'
                                                        })];
                                                case 2:
                                                    _a.loading = _b.sent();
                                                    this.loading.present();
                                                    geolocation_1.Geolocation.getCurrentPosition({
                                                        maximumAge: 1000, timeout: 5000,
                                                        enableHighAccuracy: true
                                                    }).then(function (resp) { return __awaiter(_this, void 0, void 0, function () {
                                                        var res, modal, _a, _b, _c;
                                                        var _d;
                                                        return __generator(this, function (_e) {
                                                            switch (_e.label) {
                                                                case 0:
                                                                    if (!item.isMerchant) return [3 /*break*/, 2];
                                                                    return [4 /*yield*/, this.authService.finishMerchantOrder(this.authService.activeorder.id, resp.coords.latitude.toString(), resp.coords.longitude.toString(), (_d = item.route) === null || _d === void 0 ? void 0 : _d.to_city).toPromise()];
                                                                case 1:
                                                                    res = _e.sent();
                                                                    return [3 /*break*/, 4];
                                                                case 2: return [4 /*yield*/, this.authService.finishOrder(this.authService.activeorder.id, resp.coords.latitude.toString(), resp.coords.longitude.toString()).toPromise()];
                                                                case 3:
                                                                    res = _e.sent();
                                                                    _e.label = 4;
                                                                case 4:
                                                                    _b = (_a = this.modalCtrl).create;
                                                                    _c = {
                                                                        component: setraiting_page_1.SetraitingPage,
                                                                        showBackdrop: true,
                                                                        breakpoints: [0, 0.6],
                                                                        initialBreakpoint: 0.6
                                                                    };
                                                                    return [4 /*yield*/, this.modalCtrl.getTop()];
                                                                case 5: return [4 /*yield*/, _b.apply(_a, [(_c.presentingElement = _e.sent(),
                                                                            _c.backdropDismiss = true,
                                                                            _c.cssClass = 'modalCss',
                                                                            _c.mode = 'ios',
                                                                            _c.componentProps = {
                                                                                orderid: this.authService.activeorder.id,
                                                                                userid: this.authService.activeorder.user_id
                                                                            },
                                                                            _c)])];
                                                                case 6:
                                                                    modal = _e.sent();
                                                                    return [4 /*yield*/, modal.present()];
                                                                case 7:
                                                                    _e.sent();
                                                                    if (!res.status) return [3 /*break*/, 11];
                                                                    this.loading.dismiss();
                                                                    if (!res.error) return [3 /*break*/, 9];
                                                                    return [4 /*yield*/, this.authService.alert('Ошибка', res.error)];
                                                                case 8:
                                                                    _e.sent();
                                                                    _e.label = 9;
                                                                case 9:
                                                                    this.authService.activeorder = null;
                                                                    return [4 /*yield*/, this.router.navigate(['/tabs/home'], { replaceUrl: true })];
                                                                case 10:
                                                                    _e.sent();
                                                                    return [3 /*break*/, 13];
                                                                case 11:
                                                                    this.loading.dismiss();
                                                                    return [4 /*yield*/, this.authService.alert('Ошибка', res.error)];
                                                                case 12:
                                                                    _e.sent();
                                                                    _e.label = 13;
                                                                case 13: return [2 /*return*/];
                                                            }
                                                        });
                                                    }); })["catch"](function (err) { return __awaiter(_this, void 0, void 0, function () {
                                                        return __generator(this, function (_a) {
                                                            this.loading.dismiss();
                                                            this.authService.alertLocation('Упс', 'Для завершения заказа нам нужно знать вашу геопозицию. Пожалуйста включите разрешение на использование местоположения в приложении Tirgo Driver');
                                                            return [2 /*return*/];
                                                        });
                                                    }); });
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ActiveorderPage.prototype.callMan = function (phone) {
        return __awaiter(this, void 0, void 0, function () {
            var result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, capacitor_call_number_1.CallNumber.call({ number: phone, bypassAppChooser: true })];
                    case 1:
                        result = _a.sent();
                        console.log('Call successful', result);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error('Error calling number', error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ActiveorderPage.prototype.returnNameTypeTransport = function (type) {
        var index = this.authService.typetruck.findIndex(function (e) { return +e.id === +type; });
        if (index >= 0) {
            return this.authService.typetruck[index].name;
        }
        else {
            return 'Не выбрано';
        }
    };
    ActiveorderPage.prototype.returnNameCargoType = function (id) {
        var index = this.authService.typecargo.findIndex(function (e) { return +e.id === +id; });
        if (index >= 0) {
            return this.authService.typecargo[index].name;
        }
        else {
            return 'Не выбрано';
        }
    };
    ActiveorderPage = __decorate([
        core_1.Component({
            selector: 'app-activeorder',
            templateUrl: './activeorder.page.html',
            styleUrls: ['./activeorder.page.scss']
        })
    ], ActiveorderPage);
    return ActiveorderPage;
}());
exports.ActiveorderPage = ActiveorderPage;
