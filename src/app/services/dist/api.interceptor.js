"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ApiInterceptor = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var authentication_service_1 = require("./authentication.service");
var operators_1 = require("rxjs/operators");
var ApiInterceptor = /** @class */ (function () {
    function ApiInterceptor() {
    }
    ApiInterceptor.prototype.intercept = function (req, next) {
        if (req.url == 'https://admin.tirgo.io/api/users/uploadImage') {
            req = req.clone({
                setHeaders: {
                    'Authorization': "Bearer " + authentication_service_1.AuthenticationService.jwt
                }
            });
        }
        else {
            req = req.clone({
                setHeaders: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json; charset=utf-8',
                    'Authorization': "Bearer " + authentication_service_1.AuthenticationService.jwt
                }
            });
        }
        return next.handle(req).pipe(operators_1.map(function (event) {
            if (event instanceof http_1.HttpResponse) {
            }
            return event;
        }));
    };
    ApiInterceptor = __decorate([
        core_1.Injectable()
    ], ApiInterceptor);
    return ApiInterceptor;
}());
exports.ApiInterceptor = ApiInterceptor;
