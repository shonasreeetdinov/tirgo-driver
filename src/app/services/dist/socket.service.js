"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.SocketService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var authentication_service_1 = require("./authentication.service");
var io = require("socket.io-client");
var SocketService = /** @class */ (function () {
    function SocketService() {
        this.socketConnected$ = new rxjs_1.Subject();
        this.connect();
    }
    SocketService.prototype.connect = function () {
        var _this = this;
        this.socket = io('https://admin.tirgo.io/', { transports: ['websocket'] });
        this.socket.on('connect', function () {
            console.log('connected');
            _this.socketConnected$.next(true);
            _this.socket.emit('authenticate', { token: authentication_service_1.AuthenticationService.jwt })
                .on('authenticated', function (data) {
                console.warn('connected to socket');
            })
                .on('unauthorized', function (msg) {
                console.log('unauthorized: ' + JSON.stringify(msg.data));
            });
        });
        this.socket.on('disconnect', function () {
            console.log('disconnected');
            _this.socketConnected$.next(false);
        });
        this.socket.on('connect_error', function (error) {
            console.error('Socket connection error:', error);
            _this.socketConnected$.next(false);
        });
    };
    SocketService.prototype.disconnect = function () {
        if (this.socket) {
            this.socket.disconnect();
        }
    };
    //@ts-ignore
    SocketService.prototype.ensureConnected = function () {
        var _this = this;
        return this.socketConnected$.pipe(operators_1.filter(function (connected) { return connected; }), 
        //@ts-ignore
        operators_1.switchMap(function () { return rxjs_1.from([_this.socket]); }));
    };
    SocketService.prototype.emit = function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this.ensureConnected().subscribe(function (socket) {
            socket.emit.apply(socket, __spreadArrays([event], args));
        });
    };
    SocketService.prototype.on = function (name, callback) {
        this.ensureConnected().subscribe(function (socket) {
            socket.on(name, callback);
        });
    };
    SocketService.prototype.createObservableEvent = function (eventName) {
        var _this = this;
        return new rxjs_1.Observable(function (observer) {
            _this.on(eventName, function (data) { return observer.next(data); });
        });
    };
    SocketService.prototype.detectOnline = function () {
        return this.createObservableEvent('users-changed');
    };
    SocketService.prototype.updateAllOrders = function () {
        return this.createObservableEvent('update-all-list');
    };
    SocketService.prototype.updateAllMessages = function () {
        return this.createObservableEvent('update-all-messages');
    };
    SocketService.prototype.updateDriverBalance = function () {
        return this.createObservableEvent('update-driver-balance');
    };
    SocketService.prototype.updateTirgoServiceBalance = function () {
        return this.createObservableEvent('update-alpha-balance');
    };
    SocketService.prototype.updateTirgoServices = function () {
        return this.createObservableEvent('update-services');
    };
    SocketService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], SocketService);
    return SocketService;
}());
exports.SocketService = SocketService;
