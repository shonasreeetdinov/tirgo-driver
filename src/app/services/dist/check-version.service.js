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
exports.VersionCheckService = void 0;
var core_1 = require("@angular/core");
var VersionCheckService = /** @class */ (function () {
    function VersionCheckService(http, platform, alertController) {
        this.http = http;
        this.platform = platform;
        this.alertController = alertController;
        this.versionUrl = '/assets/version.json';
    }
    VersionCheckService.prototype.checkVersion = function () {
        return __awaiter(this, void 0, void 0, function () {
            var platformType, manifest, latestVersion, minVersion, updateUrl, updateMessage, currentVersion, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        platformType = this.platform.is('ios') ? 'ios' : 'android';
                        return [4 /*yield*/, this.http.get(this.versionUrl).toPromise()];
                    case 1:
                        manifest = _a.sent();
                        latestVersion = manifest[platformType].latest;
                        minVersion = manifest[platformType].min;
                        updateUrl = manifest[platformType].url;
                        updateMessage = manifest.updateMessage;
                        currentVersion = '0.0.28';
                        if (this.isNewerVersion(latestVersion, currentVersion)) {
                            this.presentAlert(updateMessage, updateUrl);
                        }
                        else if (this.isNewerVersion(minVersion, currentVersion)) {
                            this.presentAlert('Your app version is too old. Please update to the latest version.', updateUrl, true);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error('Error fetching version info', error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    VersionCheckService.prototype.isNewerVersion = function (latestVersion, currentVersion) {
        var latest = latestVersion.split('.').map(Number);
        var current = currentVersion.split('.').map(Number);
        for (var i = 0; i < latest.length; i++) {
            if (latest[i] > current[i]) {
                return true;
            }
            else if (latest[i] < current[i]) {
                return false;
            }
        }
        return false;
    };
    VersionCheckService.prototype.presentAlert = function (message, updateUrl, forceUpdate) {
        if (forceUpdate === void 0) { forceUpdate = false; }
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Обнавите приложение',
                            message: message,
                            backdropDismiss: !forceUpdate,
                            buttons: forceUpdate
                                ? [{
                                        text: 'Обновить',
                                        handler: function () {
                                            window.open(updateUrl, '_system');
                                        }
                                    }]
                                : [
                                    {
                                        text: 'Позже',
                                        role: 'cancel'
                                    },
                                    {
                                        text: 'Обновить',
                                        handler: function () {
                                            window.open(updateUrl, '_system');
                                        }
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
    VersionCheckService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], VersionCheckService);
    return VersionCheckService;
}());
exports.VersionCheckService = VersionCheckService;
