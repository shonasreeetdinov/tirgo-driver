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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.HomePage = void 0;
var core_1 = require("@angular/core");
var order_page_1 = require("../order/order.page");
var addtransport_page_1 = require("../addtransport/addtransport.page");
var geolocation_1 = require("@capacitor/geolocation");
var axios_1 = require("axios");
var HomePage = /** @class */ (function () {
    function HomePage(authService, alertController, modalController, socketService, loadingCtrl, routerOutlet) {
        this.authService = authService;
        this.alertController = alertController;
        this.modalController = modalController;
        this.socketService = socketService;
        this.loadingCtrl = loadingCtrl;
        this.routerOutlet = routerOutlet;
        this.file_url = 'https://merchant.tirgo.io/api/v1/file/download/';
        this.modalAppendOrder = false;
        this.modalAppendOrderFull = false;
        this.filter = false;
        this.vieworder = 0;
        //order
        this.appendorderid = 0;
        this.appendorderdate = "";
        this.add_two_days = false;
        this.dates = [];
        this.price = "";
        this.selectedtruck = '';
        this.items = [];
        this.localItems = [];
        this.worldItems = [];
        this.selectedType = "world";
        this.loadingSendButton = false;
        this.filteredCityOut = "";
        this.query = { from: 0, limit: 10, transportType: '' };
        this.haveSameContents = function (a, b) {
            if (!a || !b)
                return false;
            a = a.slice(1, -1).split(",");
            var _loop_1 = function (v) {
                if (a.filter(function (e) { return +e === v; }).length !== b.filter(function (e) { return e === v; }).length)
                    return { value: false };
            };
            for (var _i = 0, _a = new Set(__spreadArrays(a, b)); _i < _a.length; _i++) {
                var v = _a[_i];
                var state_1 = _loop_1(v);
                if (typeof state_1 === "object")
                    return state_1.value;
            }
            return true;
        };
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.getOrders();
        this.routerOutlet.swipeGesture = false;
        this.socketService.updateAllOrders().subscribe(function (res) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.getOrders();
                return [2 /*return*/];
            });
        }); });
    };
    HomePage.prototype.getOrders = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // this.loader = await this.loadingCtrl.create({
                //   message: "Загрузка заказов...",
                // });
                // await this.loader.present();
                this.authService.getMyOrders(this.query).subscribe(function (res) {
                    if (res) {
                        _this.items = res;
                        // this.loader.dismiss();
                    }
                }, function (error) {
                    console.error('Error fetching orders:', error);
                    // this.loader.dismiss();
                });
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.loadMoreOrders = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.query.from = +this.query.from + +this.query.limit;
                this.authService.getMyOrders(this.query).subscribe(function (res) {
                    if (res && res.length > 0) {
                        _this.items = __spreadArrays(_this.items, res);
                        event.target.complete();
                    }
                    else {
                        event.target.disabled = true;
                    }
                }, function (error) {
                    console.error('Error fetching more orders:', error);
                    event.target.complete();
                });
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.doRefresh = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.selectTypeTransport(this.selectedtruck);
                setTimeout(function () {
                    event.target.complete();
                }, 1000);
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.selectType = function (type) {
        this.selectedType = type;
    };
    HomePage.prototype.localOrWorldIsset = function (id) {
        if (this.selectedType === "local") {
            var index = this.localItems.findIndex(function (e) { return e.id === id; });
            return index >= 0;
        }
        else if (this.selectedType === "world") {
            var index = this.worldItems.findIndex(function (e) { return e.id === id; });
            return index >= 0;
        }
        else {
            return false;
        }
    };
    HomePage.prototype.returnNameTypeTransport = function (type) {
        var index = this.authService.typetruck.findIndex(function (e) { return +e.id === +type; });
        if (index >= 0) {
            return this.authService.typetruck[index].name;
        }
        else {
            return "Не выбрано";
        }
    };
    HomePage.prototype.returnNameCargoType = function (id) {
        var index = this.authService.typecargo.findIndex(function (e) { return +e.id === +id; });
        if (index >= 0) {
            return this.authService.typecargo[index].name;
        }
        else {
            return "Не выбрано";
        }
    };
    HomePage.prototype.viewOrderInfo = function (id) {
        if (this.vieworder === id) {
            this.vieworder = 0;
        }
        else {
            this.vieworder = id;
        }
    };
    HomePage.prototype.acceptOrder = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var modal, _a, _b, _c, data, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _b = (_a = this.modalController).create;
                        _c = {
                            component: order_page_1.OrderPage,
                            canDismiss: true,
                            showBackdrop: true,
                            breakpoints: [0, 0.9],
                            initialBreakpoint: 0.9
                        };
                        return [4 /*yield*/, this.modalController.getTop()];
                    case 1: return [4 /*yield*/, _b.apply(_a, [(_c.presentingElement = _e.sent(),
                                _c.backdropDismiss = true,
                                _c.cssClass = "modalCss",
                                _c.mode = "ios",
                                _c.componentProps = {
                                    item: item
                                },
                                _c)])];
                    case 2:
                        modal = _e.sent();
                        return [4 /*yield*/, modal.present()];
                    case 3:
                        _e.sent();
                        return [4 /*yield*/, modal.onWillDismiss()];
                    case 4:
                        data = (_e.sent()).data;
                        if (!(data && data.accepted)) return [3 /*break*/, 6];
                        _d = this.authService;
                        return [4 /*yield*/, this.authService
                                .getMyOrders({})
                                .toPromise()];
                    case 5:
                        _d.myorders = _e.sent();
                        // this.items = this.authService.myorders;
                        this.getOrders();
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.findAcceptedOrders = function (id) {
        var _this = this;
        var index = this.items.findIndex(function (e) { return e.id === id; });
        if (index >= 0) {
            var indexuser = this.items[index].orders_accepted.findIndex(function (user) { var _a; return user.id === ((_a = _this.authService.currentUser) === null || _a === void 0 ? void 0 : _a.id); });
            return indexuser < 0;
        }
        return true;
    };
    HomePage.prototype.findAcceptedOrdersAndAccepted = function (id) {
        var _this = this;
        var index = this.items.findIndex(function (e) { return e.id === id; });
        if (index >= 0) {
            var indexuser = this.items[index].orders_accepted.findIndex(function (user) { var _a; return user.id === ((_a = _this.authService.currentUser) === null || _a === void 0 ? void 0 : _a.id) && user.status_order; });
            return indexuser < 0;
        }
        return false;
    };
    HomePage.prototype.appendOrder = function (item) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.authService.activeorder) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.authService.alert("Принятие заказа", "К сожалению Вы не можете принять заказ так как не завершили активный.")];
                    case 1:
                        _b.sent();
                        this.loading = false;
                        return [3 /*break*/, 6];
                    case 2:
                        if (!(((_a = this.authService.currentUser) === null || _a === void 0 ? void 0 : _a.dirty) === 3)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.authService.alert("Принятие заказа", "К сожалению Вы не можете принять заказ так как ваш аккаунт заблокирован. Обратитесь в службу поддержки для дополнительно информации.")];
                    case 3:
                        _b.sent();
                        this.loading = false;
                        return [3 /*break*/, 6];
                    case 4:
                        this.loading = false;
                        return [4 /*yield*/, this.acceptOrder(item)];
                    case 5:
                        _b.sent();
                        _b.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.openFilter = function (isOpen) {
        this.filter = isOpen;
    };
    HomePage.prototype.openModalOrderFull = function () {
        this.closeModalAll();
        this.modalAppendOrderFull = true;
    };
    HomePage.prototype.closeModalAll = function () {
        this.modalAppendOrder = false;
        this.modalAppendOrderFull = false;
        this.filter = false;
    };
    HomePage.prototype.returnDay = function (date, num) {
        var number = (+date.split(".")[0] + +num).toString();
        if (+number < 10) {
            number = "0" + number;
        }
        return number.toString();
    };
    HomePage.prototype.selectDay = function (ev, date, num) {
        var number = (+date.split(".")[0] + +num).toString();
        if (+number < 10) {
            number = "0" + number;
        }
        var index = this.dates.findIndex(function (e) { return e === number; });
        if (ev.target.checked) {
            if (index < 0) {
                this.dates.push(number);
            }
        }
        else {
            this.dates.splice(index, 1);
        }
    };
    HomePage.prototype.sendAcceptOrder = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.loadingSendButton = true;
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: "Проверяем геопозицию"
                            })];
                    case 1:
                        _a.loading = _b.sent();
                        this.loading.present();
                        geolocation_1.Geolocation.getCurrentPosition()
                            .then(function (resp) { return __awaiter(_this, void 0, void 0, function () {
                            var get;
                            var _this = this;
                            var _a;
                            return __generator(this, function (_b) {
                                get = "https://geocode-maps.yandex.ru/1.x/?format=json&geocode=" +
                                    resp.coords.latitude.toString() +
                                    "," +
                                    resp.coords.longitude.toString() +
                                    "&apikey=" + ((_a = this.authService.currentUser) === null || _a === void 0 ? void 0 : _a.config.key_api_maps) +
                                    "&lang=ru-RU";
                                axios_1["default"]
                                    .get(get)
                                    .then(function (res) { return __awaiter(_this, void 0, void 0, function () {
                                    var _this = this;
                                    return __generator(this, function (_a) {
                                        this.closeModalAll();
                                        if (res.status) {
                                            this.loading.dismiss();
                                            this.authService
                                                .acceptOrder(this.appendorderid, this.price, this.dates, false)
                                                .toPromise()
                                                .then(function (res) {
                                                if (res.data) {
                                                    _this.loading.dismiss();
                                                    _this.loadingSendButton = false;
                                                    _this.closeModalAll();
                                                }
                                            })["catch"](function (err) {
                                                _this.loading.dismiss();
                                                _this.loadingSendButton = false;
                                                _this.closeModalAll();
                                            });
                                        }
                                        return [2 /*return*/];
                                    });
                                }); })["catch"](function (error) { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                this.loading.dismiss();
                                                this.loadingSendButton = false;
                                                return [4 /*yield*/, this.authService.alert("Ошибка", "Для завершения заказа нам нужно знать вашу геопозицию. Пожалуйста включите разрешение на использование местоположения в приложении Tirgo Driver")];
                                            case 1:
                                                _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); });
                                return [2 /*return*/];
                            });
                        }); })["catch"](function (err) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        this.loading.dismiss();
                                        this.loadingSendButton = false;
                                        return [4 /*yield*/, this.authService.alert("Ошибка", "Для завершения заказа нам нужно знать вашу геопозицию. Пожалуйста включите разрешение на использование местоположения в приложении Tirgo Driver")];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.cancelOrder = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: "Внимание",
                            message: "Вы действительно хотите отменить заказ?",
                            cssClass: "customAlert",
                            buttons: [
                                {
                                    text: "Нет",
                                    role: "cancel",
                                    cssClass: "secondary",
                                    handler: function () {
                                        console.log("Confirm Cancel");
                                    }
                                },
                                {
                                    text: "Да",
                                    handler: function () { return __awaiter(_this, void 0, void 0, function () {
                                        var res;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    if (item.isMerchant)
                                                        item.id = item.id.split("M")[1];
                                                    return [4 /*yield*/, this.authService.cancelOrder(item).toPromise()];
                                                case 1:
                                                    res = _a.sent();
                                                    if (res.status) {
                                                        this.authService.checkSession();
                                                        this.authService.activeorder = null;
                                                        this.getOrders();
                                                    }
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); }
                                },
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
    HomePage.prototype.addTransport = function () {
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
                                _c.cssClass = "modalCss",
                                _c.mode = "ios",
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
    HomePage.prototype.selectTypeTransport = function (id) {
        this.selectedtruck = id;
        this.query = { from: 0, limit: 10, transportType: id };
        this.getOrders();
    };
    HomePage.prototype.filterOrders = function () {
        var _this = this;
        this.getOrders();
        this.items = this.items.filter(function (item) {
            return item.route.from_city
                .toLowerCase()
                .includes(_this.filteredCityOut.toLowerCase());
        });
        this.filter = false;
    };
    HomePage.prototype.filterClose = function () {
        this.getOrders();
        this.filter = false;
    };
    HomePage = __decorate([
        core_1.Component({
            selector: "app-home",
            templateUrl: "./home.page.html",
            styleUrls: ["./home.page.scss"],
            changeDetection: core_1.ChangeDetectionStrategy.Default
        })
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
