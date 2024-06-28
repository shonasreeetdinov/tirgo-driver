"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StorageService = exports.APP_TOKEN = void 0;
var core_1 = require("@angular/core");
var preferences_1 = require("@capacitor/preferences");
var rxjs_1 = require("rxjs");
exports.APP_TOKEN = 'app_token';
var StorageService = /** @class */ (function () {
    function StorageService() {
    }
    StorageService.prototype.setStorage = function (key, value) {
        preferences_1.Preferences.set({ key: key, value: value });
    };
    StorageService.prototype.getStorage = function (key) {
        // Preferences.migrate();
        return preferences_1.Preferences.get({ key: key });
    };
    StorageService.prototype.removeStorage = function (key) {
        preferences_1.Preferences.remove({ key: key });
    };
    StorageService.prototype.clearStorage = function () {
        preferences_1.Preferences.clear();
    };
    StorageService.prototype.getToken = function () {
        return rxjs_1.from(this.getStorage(exports.APP_TOKEN));
    };
    StorageService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], StorageService);
    return StorageService;
}());
exports.StorageService = StorageService;
