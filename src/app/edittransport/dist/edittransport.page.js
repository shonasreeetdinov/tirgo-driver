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
exports.EdittransportPage = void 0;
var core_1 = require("@angular/core");
var capacitor_file_picker_1 = require("@capawesome/capacitor-file-picker");
var EdittransportPage = /** @class */ (function () {
    function EdittransportPage(modalController, loadingCtrl, authService, alertController) {
        this.modalController = modalController;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.alertController = alertController;
        this.file_url = 'https://admin.tirgo.io/file/';
        this.type = 0;
        this.maxweight = 0;
        this.name = '';
        this.description = '';
        this.typetransport = [];
        this.files = [];
        this.tech_passport_files = [];
        this.license_files = [];
        this.car_photos = [];
        this.loadingAddTransport = false;
        this.adr = false;
        this.cubature = '';
        this.state_number = '';
    }
    EdittransportPage.prototype.ngOnInit = function () {
        this.type = this.item.type;
        this.name = this.item.name;
        this.description = this.item.description;
        this.maxweight = this.item.max_weight;
        this.adr = this.item.adr;
        this.cubature = this.item.cubature;
        this.state_number = this.item.state_number;
        this.typetransport = this.authService.typetruck.map(function (item) {
            return {
                label: item.name,
                type: 'radio',
                value: item.id
            };
        });
        for (var _i = 0, _a = this.item.docks; _i < _a.length; _i++) {
            var row = _a[_i];
            if (row.type_file === 'car_photos') {
                this.car_photos.push(row);
            }
            else if (row.type_file === 'license_files') {
                this.license_files.push(row);
            }
            else if (row.type_file === 'tech_passport_files') {
                this.tech_passport_files.push(row);
            }
        }
    };
    EdittransportPage.prototype.close = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.dismiss({
                            accepted: true
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EdittransportPage.prototype.returnNameTypeTransport = function (type) {
        var index = this.authService.typetruck.findIndex(function (e) { return +e.id === +type; });
        if (index >= 0) {
            return this.authService.typetruck[index].name;
        }
        else {
            return 'Не выбрано';
        }
    };
    EdittransportPage.prototype.returnMaxWeightTransport = function (type) {
        var index = this.authService.typetruck.findIndex(function (e) { return +e.id === +type; });
        if (index >= 0) {
            return this.authService.typetruck[index].weight;
        }
        else {
            return 0;
        }
    };
    EdittransportPage.prototype.selectTypeTransport = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Выберите тип транспорта',
                            cssClass: 'customAlert',
                            inputs: this.typetransport,
                            buttons: [
                                {
                                    text: 'Отмена',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                    }
                                }, {
                                    text: 'Выбрать',
                                    handler: function (data) { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            this.type = data;
                                            this.maxweight = this.returnMaxWeightTransport(data);
                                            return [2 /*return*/];
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
    EdittransportPage.prototype.saveTransport = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loadingAddTransport = true;
                        return [4 /*yield*/, this.authService.editTransport(this.name, this.description, this.maxweight, this.type, this.adr, this.item.id, this.car_photos, this.license_files, this.tech_passport_files, this.cubature, this.state_number).toPromise()
                                .then(function (res) { return __awaiter(_this, void 0, void 0, function () {
                                var _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!res.status) return [3 /*break*/, 4];
                                            this.loadingAddTransport = false;
                                            _a = this.authService;
                                            return [4 /*yield*/, this.authService.getTruck().toPromise()];
                                        case 1:
                                            _a.mytruck = _b.sent();
                                            return [4 /*yield*/, this.close()];
                                        case 2:
                                            _b.sent();
                                            return [4 /*yield*/, this.authService.alert('Отлично', 'Транспорт успешно изменен')];
                                        case 3:
                                            _b.sent();
                                            return [3 /*break*/, 6];
                                        case 4:
                                            this.loadingAddTransport = false;
                                            return [4 /*yield*/, this.authService.alert('Ошибка', res.error)];
                                        case 5:
                                            _b.sent();
                                            _b.label = 6;
                                        case 6: return [2 /*return*/];
                                    }
                                });
                            }); })["catch"](function (err) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    this.loadingAddTransport = false;
                                    console.log(err);
                                    return [2 /*return*/];
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EdittransportPage.prototype.uploadImage = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            var result, file, fileName;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, capacitor_file_picker_1.FilePicker.pickImages({ readData: true })];
                    case 1:
                        result = _a.sent();
                        file = result.files[0].data;
                        fileName = new Date().getTime() + '.jpeg';
                        return [4 /*yield*/, this.authService.uploadFile(fileName, file, 'car-docks').then(function (res) {
                                if (res) {
                                    if (type == 'tech_passport_files') {
                                        _this.tech_passport_files.push(res.file);
                                    }
                                    if (type == 'license_files') {
                                        _this.license_files.push(res.file);
                                    }
                                    if (type == 'car_photos') {
                                        _this.car_photos.push(res.file);
                                    }
                                }
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EdittransportPage.prototype.addFilesTechPassport = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Отгружаем фото',
                                cssClass: 'custom-loading'
                            })];
                    case 1:
                        _a.loading = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EdittransportPage.prototype.delFileTechTransport = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Удаление фото',
                            message: 'Вы уверены что хотите удалить изображение.',
                            cssClass: 'customAlert',
                            buttons: [
                                {
                                    text: 'Отмена',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                    }
                                }, {
                                    text: 'Удалить',
                                    role: 'destructive',
                                    handler: function (data) { return __awaiter(_this, void 0, void 0, function () {
                                        var index;
                                        return __generator(this, function (_a) {
                                            index = this.tech_passport_files.findIndex(function (e) { return e.preview === file; });
                                            if (index >= 0) {
                                                this.tech_passport_files.splice(index, 1);
                                            }
                                            return [2 /*return*/];
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
    EdittransportPage.prototype.addFilesLicense = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Отгружаем фото',
                                cssClass: 'custom-loading'
                            })];
                    case 1:
                        _a.loading = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EdittransportPage.prototype.delFileLicense = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Удаление фото',
                            message: 'Вы уверены что хотите удалить изображение.',
                            cssClass: 'customAlert',
                            buttons: [
                                {
                                    text: 'Отмена',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                    }
                                }, {
                                    text: 'Удалить',
                                    role: 'destructive',
                                    handler: function (data) { return __awaiter(_this, void 0, void 0, function () {
                                        var index;
                                        return __generator(this, function (_a) {
                                            index = this.license_files.findIndex(function (e) { return e.preview === file; });
                                            if (index >= 0) {
                                                this.license_files.splice(index, 1);
                                            }
                                            return [2 /*return*/];
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
    EdittransportPage.prototype.addFilesCarPhoto = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Отгружаем фото',
                                cssClass: 'custom-loading'
                            })];
                    case 1:
                        _a.loading = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EdittransportPage.prototype.delFileCarPhoto = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Удаление фото',
                            message: 'Вы уверены что хотите удалить изображение.',
                            cssClass: 'customAlert',
                            buttons: [
                                {
                                    text: 'Отмена',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                    }
                                }, {
                                    text: 'Удалить',
                                    role: 'destructive',
                                    handler: function (data) { return __awaiter(_this, void 0, void 0, function () {
                                        var index;
                                        return __generator(this, function (_a) {
                                            index = this.car_photos.findIndex(function (e) { return e.preview === file; });
                                            if (index >= 0) {
                                                this.car_photos.splice(index, 1);
                                            }
                                            return [2 /*return*/];
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
    EdittransportPage.prototype.setAdrUser = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.adr = ev.target.checked;
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        core_1.Input('item')
    ], EdittransportPage.prototype, "item");
    EdittransportPage = __decorate([
        core_1.Component({
            selector: 'app-edittransport',
            templateUrl: './edittransport.page.html',
            styleUrls: ['./edittransport.page.scss']
        })
    ], EdittransportPage);
    return EdittransportPage;
}());
exports.EdittransportPage = EdittransportPage;
