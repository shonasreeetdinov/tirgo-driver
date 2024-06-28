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
exports.FcmService = exports.FCM_TOKEN = void 0;
var core_1 = require("@angular/core");
var core_2 = require("@capacitor/core");
var push_notifications_1 = require("@capacitor/push-notifications");
var rxjs_1 = require("rxjs");
exports.FCM_TOKEN = 'push_notification_token';
var TOKEN_KEY = 'jwttirgotoken';
var FcmService = /** @class */ (function () {
    function FcmService(storageService, authService, http, storage) {
        this.storageService = storageService;
        this.authService = authService;
        this.http = http;
        this.storage = storage;
        this._redirect = new rxjs_1.BehaviorSubject(null);
    }
    Object.defineProperty(FcmService.prototype, "redirect", {
        get: function () {
            return this._redirect.asObservable();
        },
        enumerable: false,
        configurable: true
    });
    FcmService.prototype.initPush = function () {
        if (core_2.Capacitor.getPlatform() !== 'web') {
            this.registerPush();
        }
    };
    FcmService.prototype.registerPush = function () {
        return __awaiter(this, void 0, void 0, function () {
            var permStatus, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, this.addListeners()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, push_notifications_1.PushNotifications.checkPermissions()];
                    case 2:
                        permStatus = _a.sent();
                        if (!(permStatus.receive === 'prompt')) return [3 /*break*/, 4];
                        return [4 /*yield*/, push_notifications_1.PushNotifications.requestPermissions()];
                    case 3:
                        permStatus = _a.sent();
                        _a.label = 4;
                    case 4:
                        if (permStatus.receive !== 'granted') {
                            throw new Error('User denied permissions!');
                        }
                        return [4 /*yield*/, push_notifications_1.PushNotifications.register()];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    FcmService.prototype.getDeliveredNotifications = function () {
        return __awaiter(this, void 0, void 0, function () {
            var notificationList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, push_notifications_1.PushNotifications.getDeliveredNotifications()];
                    case 1:
                        notificationList = _a.sent();
                        console.log('Delivered notifications:', notificationList);
                        return [2 /*return*/];
                }
            });
        });
    };
    FcmService.prototype.addListeners = function () {
        var _this = this;
        push_notifications_1.PushNotifications.addListener('registration', function (token) { return __awaiter(_this, void 0, void 0, function () {
            var fcm_token, go, saved_token, _a, _b, data;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        fcm_token = token === null || token === void 0 ? void 0 : token.value;
                        this.authService.setFcmToken({ userId: this.authService.currentUser.id, fcmToken: fcm_token }).subscribe(function (res) { });
                        go = 1;
                        _b = (_a = JSON).parse;
                        return [4 /*yield*/, this.storageService.getStorage(exports.FCM_TOKEN)];
                    case 1:
                        saved_token = _b.apply(_a, [(_c.sent()).value]);
                        if (saved_token) {
                            if (fcm_token === saved_token) {
                                console.log('Same token');
                                go = 0;
                            }
                            else {
                                go = 2;
                            }
                        }
                        if (go === 1) {
                            this.storageService.setStorage(exports.FCM_TOKEN, JSON.stringify(fcm_token));
                        }
                        else if (go === 2) {
                            data = {
                                expired_token: saved_token,
                                refreshed_token: fcm_token
                            };
                            this.storageService.setStorage(exports.FCM_TOKEN, fcm_token);
                        }
                        return [2 /*return*/];
                }
            });
        }); });
        push_notifications_1.PushNotifications.addListener('registrationError', function (error) {
            console.log('Error: ' + JSON.stringify(error));
        });
        push_notifications_1.PushNotifications.addListener('pushNotificationReceived', function (notification) { return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                console.log('Push received: ' + JSON.stringify(notification));
                data = notification === null || notification === void 0 ? void 0 : notification.data;
                if (data === null || data === void 0 ? void 0 : data.redirect)
                    this._redirect.next(data === null || data === void 0 ? void 0 : data.redirect);
                // Custom logic to confirm receipt
                this.confirmNotificationReceipt(notification);
                return [2 /*return*/];
            });
        }); });
        push_notifications_1.PushNotifications.addListener('pushNotificationActionPerformed', function (notification) { return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                data = notification.notification.data;
                console.log('Action performed: ' + JSON.stringify(notification.notification));
                console.log('Push data: ', data);
                if (data === null || data === void 0 ? void 0 : data.redirect)
                    this._redirect.next(data === null || data === void 0 ? void 0 : data.redirect);
                // Custom logic to confirm action performed
                this.confirmNotificationActionPerformed(notification);
                return [2 /*return*/];
            });
        }); });
    };
    FcmService.prototype.confirmNotificationReceipt = function (notification) {
        // Logic to confirm notification receipt
        console.log('Notification received with ID:', notification.id);
        // Optionally, send this confirmation to your server
    };
    FcmService.prototype.confirmNotificationActionPerformed = function (notification) {
        // Logic to confirm notification action performed
        console.log('Notification action performed with ID:', notification.notification.id);
        // Optionally, send this confirmation to your server
    };
    FcmService.prototype.removeFcmToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var saved_token, _a, _b, e_2;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        _b = (_a = JSON).parse;
                        return [4 /*yield*/, this.storageService.getStorage(exports.FCM_TOKEN)];
                    case 1:
                        saved_token = _b.apply(_a, [(_c.sent()).value]);
                        this.storageService.removeStorage(saved_token);
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _c.sent();
                        console.log(e_2);
                        throw (e_2);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FcmService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], FcmService);
    return FcmService;
}());
exports.FcmService = FcmService;
