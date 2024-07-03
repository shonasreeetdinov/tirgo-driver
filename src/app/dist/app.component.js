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
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var geolocation_1 = require("@capacitor/geolocation");
var user_1 = require("./user");
var axios_1 = require("axios");
var AppComponent = /** @class */ (function () {
    function AppComponent(platform, socketService, themeService, authService, storage, translateService, alertController, router, fcm, updateService) {
        var _this = this;
        this.platform = platform;
        this.socketService = socketService;
        this.themeService = themeService;
        this.authService = authService;
        this.storage = storage;
        this.translateService = translateService;
        this.alertController = alertController;
        this.router = router;
        this.fcm = fcm;
        this.updateService = updateService;
        this.connected = true;
        this.router.navigate(['loading']);
        this.initializeApp();
        setInterval(function () {
            _this.updateLocation();
        }, 1800000);
    }
    AppComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.create()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.storage.get('language').then(function (val) {
                                if (val === 'ru') {
                                    _this.authService.language = 'ru';
                                    _this.translateService.use('ru');
                                }
                                else if (val === 'tr') {
                                    _this.authService.language = 'tr';
                                    _this.translateService.use('tr');
                                }
                                else if (val === 'en') {
                                    _this.authService.language = 'en';
                                    _this.translateService.use('en');
                                }
                                else {
                                    _this.authService.language = 'ru';
                                    _this.translateService.use('ru');
                                }
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.authService.checkToken()];
                    case 3:
                        _a.sent();
                        this.authService.authenticationState.subscribe(function (res) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!res) return [3 /*break*/, 2];
                                        return [4 /*yield*/, this.checkSession()];
                                    case 1:
                                        _a.sent();
                                        return [3 /*break*/, 4];
                                    case 2: return [4 /*yield*/, this.router.navigate(['selectlanguage'], { replaceUrl: true })];
                                    case 3:
                                        _a.sent();
                                        _a.label = 4;
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.checkSession = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.checkSession().toPromise().then(function (res) { return __awaiter(_this, void 0, void 0, function () {
                            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
                            var _this = this;
                            return __generator(this, function (_l) {
                                switch (_l.label) {
                                    case 0:
                                        if (!res.status) return [3 /*break*/, 15];
                                        this.authService.currentUser = new user_1.User(res.user);
                                        this.fcm.initPush();
                                        if (!this.authService.isAuthenticated()) {
                                            this.authService.authenticationState.next(true);
                                        }
                                        if (!(this.authService.currentUser.name !== null)) return [3 /*break*/, 12];
                                        this.authService.getActiveOrder(this.authService.currentUser.id).subscribe(function (res) {
                                            if (res) {
                                                _this.authService.activeorder = res.data.data;
                                            }
                                        });
                                        this.socketService.connect();
                                        _a = this.authService;
                                        return [4 /*yield*/, this.authService.getTypeTruck().toPromise()];
                                    case 1:
                                        _a.typetruck = _l.sent();
                                        _b = this.authService;
                                        return [4 /*yield*/, this.authService.getTypeCargo().toPromise()];
                                    case 2:
                                        _b.typecargo = _l.sent();
                                        _c = this.authService;
                                        return [4 /*yield*/, this.authService.getTruck().toPromise()];
                                    case 3:
                                        _c.mytruck = _l.sent();
                                        _d = this.authService;
                                        return [4 /*yield*/, this.authService.getContacts().toPromise()];
                                    case 4:
                                        _d.contacts = _l.sent();
                                        _e = this.authService;
                                        return [4 /*yield*/, this.authService.getMyArchiveOrders().toPromise()];
                                    case 5:
                                        _e.myarchiveorders = _l.sent();
                                        _f = this.authService;
                                        return [4 /*yield*/, this.authService.getCurrency().toPromise()];
                                    case 6:
                                        _f.currency = _l.sent();
                                        _g = this.authService;
                                        return [4 /*yield*/, this.authService.getStatuses().toPromise()];
                                    case 7:
                                        _g.statuses = _l.sent();
                                        // this.authService.activeorder = await this.authService.getActiveOrder(this.authService.currentUser.id).toPromise();
                                        _h = this.authService;
                                        return [4 /*yield*/, this.authService.getMyOrders({ from: 0, limit: 50, transportType: '' }).toPromise()];
                                    case 8:
                                        // this.authService.activeorder = await this.authService.getActiveOrder(this.authService.currentUser.id).toPromise();
                                        _h.myorders = _l.sent();
                                        // for (let row of this.authService.myorders) {
                                        //   const index = this.authService.myorders.findIndex(e => e.id === row.id && row.status === 1)
                                        //   if (index >= 0) {
                                        //     const indexuser = this.authService.myorders[index].orders_accepted.findIndex((user: {
                                        //       status_order: number | undefined;
                                        //       id: number | undefined;
                                        //     }) => user.id === this.authService.currentUser?.id && user.status_order === 1)
                                        //     if (indexuser >= 0) {
                                        //       this.authService.activeorder = this.authService.myorders[index];
                                        //       this.authService.myorders.splice(index, 1)
                                        //     }
                                        //   }
                                        // }
                                        this.socketService.updateAllOrders().subscribe(function (res) { return __awaiter(_this, void 0, void 0, function () {
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0: 
                                                    // this.authService.myorders = await this.authService.getMyOrders().toPromise();
                                                    // for (let row of this.authService.myorders) {
                                                    //   const index = this.authService.myorders.findIndex(e => e.id === row.id && row.status === 1)
                                                    //   if (index >= 0) {
                                                    //     const indexuser = this.authService.myorders[index].orders_accepted.findIndex((user: {
                                                    //       status_order: number | undefined;
                                                    //       user_id: number | undefined;
                                                    //     }) => user.user_id === this.authService.currentUser?.id && user.status_order === 1)
                                                    //     if (indexuser >= 0) {
                                                    //       this.authService.activeorder = this.authService.myorders[index];
                                                    //       this.authService.myorders.splice(index, 1)
                                                    //     }
                                                    //   }
                                                    // }
                                                    return [4 /*yield*/, this.checkSession()];
                                                    case 1:
                                                        // this.authService.myorders = await this.authService.getMyOrders().toPromise();
                                                        // for (let row of this.authService.myorders) {
                                                        //   const index = this.authService.myorders.findIndex(e => e.id === row.id && row.status === 1)
                                                        //   if (index >= 0) {
                                                        //     const indexuser = this.authService.myorders[index].orders_accepted.findIndex((user: {
                                                        //       status_order: number | undefined;
                                                        //       user_id: number | undefined;
                                                        //     }) => user.user_id === this.authService.currentUser?.id && user.status_order === 1)
                                                        //     if (indexuser >= 0) {
                                                        //       this.authService.activeorder = this.authService.myorders[index];
                                                        //       this.authService.myorders.splice(index, 1)
                                                        //     }
                                                        //   }
                                                        // }
                                                        _a.sent();
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); });
                                        _j = this.authService;
                                        return [4 /*yield*/, this.authService.getNotification().toPromise()];
                                    case 9:
                                        _j.notifications = _l.sent();
                                        _k = this.authService;
                                        return [4 /*yield*/, this.authService.getMessages().toPromise()];
                                    case 10:
                                        _k.messages = _l.sent();
                                        this.socketService.updateAllMessages().subscribe(function (res) { return __awaiter(_this, void 0, void 0, function () {
                                            var _a;
                                            return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0:
                                                        _a = this.authService;
                                                        return [4 /*yield*/, this.authService.getMessages().toPromise()];
                                                    case 1:
                                                        _a.messages = _b.sent();
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); });
                                        this.socketService.updateActiveOrder().subscribe(function (res) { return __awaiter(_this, void 0, void 0, function () {
                                            var _this = this;
                                            return __generator(this, function (_a) {
                                                this.authService.getActiveOrder(this.authService.currentUser.id).subscribe(function (res) {
                                                    if (res) {
                                                        _this.authService.activeorder = res.data.data;
                                                    }
                                                });
                                                return [2 /*return*/];
                                            });
                                        }); });
                                        //this.authService.allordersfree = await this.authService.getAllOrdersFree().toPromise();
                                        //this.authService.allmyordersprocessing = await this.authService.getAllMyOrdersProcessing().toPromise();
                                        return [4 /*yield*/, this.router.navigate(['/tabs/home'], { replaceUrl: true })];
                                    case 11:
                                        //this.authService.allordersfree = await this.authService.getAllOrdersFree().toPromise();
                                        //this.authService.allmyordersprocessing = await this.authService.getAllMyOrdersProcessing().toPromise();
                                        _l.sent();
                                        geolocation_1.Geolocation.getCurrentPosition().then(function (resp) { return __awaiter(_this, void 0, void 0, function () {
                                            var get;
                                            var _this = this;
                                            var _a;
                                            return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0:
                                                        this.authService.geolocationCheck = true;
                                                        return [4 /*yield*/, this.authService.updateLocation(resp.coords.latitude.toString(), resp.coords.longitude.toString()).toPromise()];
                                                    case 1:
                                                        _b.sent();
                                                        get = "https://geocode-maps.yandex.ru/1.x/?format=json&geocode=" + resp.coords.longitude.toString() + "," + resp.coords.latitude.toString() + "&apikey=" + ((_a = this.authService.currentUser) === null || _a === void 0 ? void 0 : _a.config.key_api_maps) + "&lang=ru-RU";
                                                        axios_1["default"].get(get)
                                                            .then(function (res) {
                                                            if (res.status) {
                                                                _this.authService.geolocationCheck = true;
                                                                _this.authService.cityinfo = res.data.response.GeoObjectCollection.featureMember[0].GeoObject.description;
                                                            }
                                                        });
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); });
                                        return [3 /*break*/, 14];
                                    case 12: return [4 /*yield*/, this.router.navigate(['/name'], { replaceUrl: true })];
                                    case 13:
                                        _l.sent();
                                        _l.label = 14;
                                    case 14: return [3 /*break*/, 17];
                                    case 15:
                                        this.authService.authenticationState.next(false);
                                        return [4 /*yield*/, this.router.navigate(['selectlanguage'], { replaceUrl: true })];
                                    case 16:
                                        _l.sent();
                                        _l.label = 17;
                                    case 17: return [2 /*return*/];
                                }
                            });
                        }); })["catch"](function (err) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        this.authService.authenticationState.next(false);
                                        return [4 /*yield*/, this.router.navigate(['selectlanguage'], { replaceUrl: true })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.initializeApp = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.platform.is('ios') || this.platform.is('android')) {
                    this.platform.ready().then(function () {
                        _this.updateService.checkForUpdates();
                        // Network.getStatus().then(async (status) => {
                        //   if (status.connected) {
                        //     console.log('online');
                        //     if (this.authService.isAuthenticated()) {
                        //       this.router.navigate(['tabs', 'home'], { replaceUrl: true });
                        //     } else {
                        //       this.router.navigate(['selectlanguage'], { replaceUrl: true });
                        //     }
                        //   } 
                        //   else {
                        //     console.log('offline');
                        //     this.router.navigate(['offline']);
                        //   }
                        // });
                        _this.themeService.restore();
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    AppComponent.prototype.updateLocation = function () {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var position, get, res, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, geolocation_1.Geolocation.getCurrentPosition()];
                    case 1:
                        position = _b.sent();
                        if (!this.authService.isAuthenticated()) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.authService.updateLocation(position.coords.latitude.toString(), position.coords.longitude.toString()).toPromise()];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        get = "https://geocode-maps.yandex.ru/1.x/?format=json&geocode=" + position.coords.longitude.toString() + "," + position.coords.latitude.toString() + "&apikey=" + ((_a = this.authService.currentUser) === null || _a === void 0 ? void 0 : _a.config.key_api_maps) + "&lang=ru-RU";
                        return [4 /*yield*/, axios_1["default"].get(get)];
                    case 4:
                        res = _b.sent();
                        if (res.status) {
                            this.authService.geolocationCheck = true;
                            this.authService.cityinfo = res.data.response.GeoObjectCollection.featureMember[0].GeoObject.description;
                        }
                        return [3 /*break*/, 6];
                    case 5:
                        error_1 = _b.sent();
                        console.error('Error getting location:', error_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.scss']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
