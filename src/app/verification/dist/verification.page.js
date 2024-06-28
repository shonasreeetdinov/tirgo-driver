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
exports.VerificationPage = void 0;
var core_1 = require("@angular/core");
var capacitor_file_picker_1 = require("@capawesome/capacitor-file-picker");
var VerificationPage = /** @class */ (function () {
    function VerificationPage(router, navCtrl, authService, loadingCtrl, zone, alertController, http) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.zone = zone;
        this.alertController = alertController;
        this.http = http;
        this.alertButtons = ['Ok'];
        this.mask = '0000-0000-0000-0000';
        this.file_url = 'https://admin.tirgo.io/file/';
        this.prefix = '+998';
        this.phone = '';
        this.country_code = 'uz';
        this.timer = 59;
        this.code = '';
        this.fullName = '';
        this.bankNumber = '';
        this.bankName = '';
        this.codeon = true;
        this.verify = false;
        this.error = false;
        this.passport_docks = [];
        this.driver_license = [];
        this.license_files = [];
        this.countries = [];
        this.car_photos = [];
        this.tech_passport_files = [];
        this.typetransport = [];
        this.type = 0;
        this.stepper = 0;
        this.brand_name_check = false;
        this.state_registration_truckNumber_check = false;
        this.type_check = false;
        this.formData = {
            user_id: 0,
            full_name: '',
            phone: '',
            selfies_with_passport: '',
            bank_card: '',
            bank_cardname: '',
            transport_front_photo: '',
            transport_back_photo: '',
            transport_side_photo: '',
            adr_photo: '',
            transport_registration_country: '',
            driver_license: '',
            transportation_license_photo: '',
            state_registration_truckNumber: '',
            techpassport_photo1: '',
            techpassport_photo2: '',
            type: 0,
            brand_name: ''
        };
    }
    VerificationPage.prototype.ngOnInit = function () {
        var _this = this;
        this.getJSONFromLocal().subscribe(function (data) {
            _this.countries = data;
            _this.country_code = _this.getCountryCode(_this.authService.currentUser.phone);
            _this.phone = _this.authService.currentUser.phone;
            _this.formData.phone = _this.authService.currentUser.phone;
            _this.formData.user_id = _this.authService.currentUser.id;
            _this.formData.state_registration_truckNumber = _this.authService.mytruck[0].state_number;
            _this.formData.type = _this.authService.mytruck[0].type;
            _this.formData.brand_name = _this.authService.mytruck[0].brand_name;
            _this.state_registration_truckNumber_check = _this.authService.mytruck[0].state_number ? true : false;
            _this.type_check = _this.authService.mytruck[0].type ? true : false;
            _this.brand_name_check = _this.authService.mytruck[0].brand_name ? true : false;
            _this.typetransport = _this.authService.typetruck.map(function (item) {
                return {
                    label: item.name,
                    type: 'radio',
                    value: item.id
                };
            });
            for (var _i = 0, _a = _this.authService.currentUser.files; _i < _a.length; _i++) {
                var row = _a[_i];
                if (row.type_file === 'license_files') {
                    _this.license_files.push(row);
                }
                else if (row.type_file === 'tech_passport_files') {
                    _this.tech_passport_files.push(row);
                }
            }
            _this.sendSms();
        });
    };
    VerificationPage.prototype.getJSONFromLocal = function () {
        return this.http.get("./assets/json/code.json");
    };
    VerificationPage.prototype.getCountryCode = function (phoneNumber) {
        var numericPhoneNumber = phoneNumber.replace(/\D/g, '');
        for (var _i = 0, _a = this.countries; _i < _a.length; _i++) {
            var country = _a[_i];
            var dialCode = country.dial_country_code;
            if (numericPhoneNumber.startsWith(dialCode)) {
                return country.code;
            }
            var regionCodes = country.dial_region_codes || [];
            for (var _b = 0, regionCodes_1 = regionCodes; _b < regionCodes_1.length; _b++) {
                var regionCode = regionCodes_1[_b];
                var fullDialCode = dialCode + regionCode;
                if (numericPhoneNumber.startsWith(fullDialCode)) {
                    return country.code;
                }
            }
        }
        return null;
    };
    VerificationPage.prototype.sendSms = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.driverVerification(this.phone, this.country_code).toPromise()
                            .then(function (res) { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            return __generator(this, function (_a) {
                                if (res.status) {
                                    this.codeon = true;
                                    this.loading = false;
                                    this.timer = 59;
                                    setInterval(function () {
                                        if (_this.timer > 0) {
                                            _this.timer = _this.timer - 1;
                                        }
                                    }, 1000);
                                }
                                this.error = false;
                                return [2 /*return*/];
                            });
                        }); })["catch"](function (err) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                this.loading = false;
                                this.error = true;
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
    VerificationPage.prototype.verifyCode = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.verifyCodeDriver(this.phone, this.code).toPromise()
                            .then(function (res) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!res.status) return [3 /*break*/, 1];
                                        this.loading = true;
                                        this.verify = true;
                                        return [3 /*break*/, 3];
                                    case 1: return [4 /*yield*/, this.authService.alert('Ошибка', res.text)];
                                    case 2:
                                        _a.sent();
                                        this.loading = false;
                                        _a.label = 3;
                                    case 3:
                                        this.error = false;
                                        return [2 /*return*/];
                                }
                            });
                        }); })["catch"](function (err) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                this.loading = false;
                                this.error = true;
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
    VerificationPage.prototype.returnNameTypeTransport = function (type) {
        var index = this.authService.typetruck.findIndex(function (e) { return +e.id === +type; });
        if (index >= 0) {
            return this.authService.typetruck[index].name;
        }
        else {
            return 'Не выбрано';
        }
    };
    VerificationPage.prototype.selectTypeTransport = function () {
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
                                            this.formData.type = data;
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
    VerificationPage.prototype.uploadFile = function (type) {
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
                        return [4 /*yield*/, this.authService.uploadFile(fileName, file, 'verification').then(function (res) {
                                var _a, _b, _c, _d, _e, _f, _g, _h, _j;
                                if (res) {
                                    if (type == 'selfies_with_passport') {
                                        _this.formData.selfies_with_passport = (_a = res === null || res === void 0 ? void 0 : res.file) === null || _a === void 0 ? void 0 : _a.filename;
                                    }
                                    if (type == 'transport_front_photo') {
                                        _this.formData.transport_front_photo = (_b = res === null || res === void 0 ? void 0 : res.file) === null || _b === void 0 ? void 0 : _b.filename;
                                    }
                                    if (type == 'transport_back_photo') {
                                        _this.formData.transport_back_photo = (_c = res === null || res === void 0 ? void 0 : res.file) === null || _c === void 0 ? void 0 : _c.filename;
                                    }
                                    if (type == 'transport_side_photo') {
                                        _this.formData.transport_side_photo = (_d = res === null || res === void 0 ? void 0 : res.file) === null || _d === void 0 ? void 0 : _d.filename;
                                    }
                                    if (type == 'adr_photo') {
                                        _this.formData.adr_photo = (_e = res === null || res === void 0 ? void 0 : res.file) === null || _e === void 0 ? void 0 : _e.filename;
                                    }
                                    if (type == 'driver_license') {
                                        _this.formData.driver_license = (_f = res === null || res === void 0 ? void 0 : res.file) === null || _f === void 0 ? void 0 : _f.filename;
                                    }
                                    if (type == 'transportation_license_photo') {
                                        _this.formData.transportation_license_photo = (_g = res === null || res === void 0 ? void 0 : res.file) === null || _g === void 0 ? void 0 : _g.filename;
                                    }
                                    if (type == 'techpassport_photo1') {
                                        _this.formData.techpassport_photo1 = (_h = res === null || res === void 0 ? void 0 : res.file) === null || _h === void 0 ? void 0 : _h.filename;
                                        _this.stepper++;
                                    }
                                    if (type == 'techpassport_photo2') {
                                        _this.formData.techpassport_photo2 = (_j = res === null || res === void 0 ? void 0 : res.file) === null || _j === void 0 ? void 0 : _j.filename;
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
    VerificationPage.prototype.addFilesLicense = function () {
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
    VerificationPage.prototype.addPassport = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Фото паспорта с вашим лицом селфи',
                                cssClass: 'custom-loading'
                            })];
                    case 1:
                        _a.loading = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    VerificationPage.prototype.addPhotoOpposite = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Фото паспорта с вашим лицом селфи',
                                cssClass: 'custom-loading'
                            })];
                    case 1:
                        _a.loading = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    VerificationPage.prototype.addPhotoBack = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Фото паспорта с вашим лицом селфи',
                                cssClass: 'custom-loading'
                            })];
                    case 1:
                        _a.loading = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    VerificationPage.prototype.addPhotoLeft = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Фото паспорта с вашим лицом селфи',
                                cssClass: 'custom-loading'
                            })];
                    case 1:
                        _a.loading = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    VerificationPage.prototype.addPhotoAdr = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Фото паспорта с вашим лицом селфи',
                                cssClass: 'custom-loading'
                            })];
                    case 1:
                        _a.loading = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    VerificationPage.prototype.addPhotoLicence = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Фото паспорта с вашим лицом селфи',
                                cssClass: 'custom-loading'
                            })];
                    case 1:
                        _a.loading = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    VerificationPage.prototype.addFilesCarPhoto = function () {
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
    VerificationPage.prototype.submit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.formData.full_name) return [3 /*break*/, 1];
                        this.authService.alert('Ошибка', 'Требуется  ввести свое имя и фамилию');
                        this.loadingSubmit = false;
                        return [3 /*break*/, 18];
                    case 1:
                        if (!!this.formData.selfies_with_passport) return [3 /*break*/, 2];
                        this.authService.alert('Ошибка', 'Требуется фотографии паспорта обязательно.');
                        this.loadingSubmit = false;
                        return [3 /*break*/, 18];
                    case 2:
                        if (!!this.formData.bank_card) return [3 /*break*/, 3];
                        this.authService.alert('Ошибка', 'Требуется номер банковской карты.');
                        this.loadingSubmit = false;
                        return [3 /*break*/, 18];
                    case 3:
                        if (!!this.formData.bank_cardname) return [3 /*break*/, 4];
                        this.authService.alert('Ошибка', 'Требуется указать название банковской карты.');
                        this.loadingSubmit = false;
                        return [3 /*break*/, 18];
                    case 4:
                        if (!!this.formData.transport_front_photo) return [3 /*break*/, 5];
                        this.authService.alert('Ошибка', 'Требуется фотографии Фото спереди обязательно.');
                        this.loadingSubmit = false;
                        return [3 /*break*/, 18];
                    case 5:
                        if (!!this.formData.transport_back_photo) return [3 /*break*/, 6];
                        this.authService.alert('Ошибка', 'Требуется фотографии Фото сзади обязательно.');
                        this.loadingSubmit = false;
                        return [3 /*break*/, 18];
                    case 6:
                        if (!!this.formData.transport_side_photo) return [3 /*break*/, 7];
                        this.authService.alert('Ошибка', 'Требуется фотографии Фото сбоку обязательно.');
                        this.loadingSubmit = false;
                        return [3 /*break*/, 18];
                    case 7:
                        if (!!this.formData.transportation_license_photo) return [3 /*break*/, 8];
                        this.authService.alert('Ошибка', 'Требуется фотографии Фото  Водительское удостоверение  обязательно.');
                        this.loadingSubmit = false;
                        return [3 /*break*/, 18];
                    case 8:
                        if (!!this.formData.driver_license) return [3 /*break*/, 9];
                        this.authService.alert('Ошибка', 'Требуется фотографии Фото  Водительские права.');
                        this.loadingSubmit = false;
                        return [3 /*break*/, 18];
                    case 9:
                        if (!!this.formData.transport_registration_country) return [3 /*break*/, 10];
                        this.authService.alert('Ошибка', 'Требуется   Страна регистрации транспорта обязательно.');
                        this.loadingSubmit = false;
                        return [3 /*break*/, 18];
                    case 10:
                        if (!!this.formData.state_registration_truckNumber) return [3 /*break*/, 11];
                        this.authService.alert('Ошибка', 'Требуется Номер государственной регистрации ТС.');
                        this.loadingSubmit = false;
                        return [3 /*break*/, 18];
                    case 11:
                        if (!!this.formData.techpassport_photo1) return [3 /*break*/, 12];
                        this.authService.alert('Ошибка', 'Требуется фотографии Фото техпаспорта 1.');
                        this.loadingSubmit = false;
                        return [3 /*break*/, 18];
                    case 12:
                        if (!!this.formData.techpassport_photo2) return [3 /*break*/, 13];
                        this.authService.alert('Ошибка', 'Требуется фотографии Фото техпаспорта 2.');
                        this.loadingSubmit = false;
                        return [3 /*break*/, 18];
                    case 13:
                        if (!!this.formData.type) return [3 /*break*/, 14];
                        this.authService.alert('Ошибка', 'Требуется Тип прицепа');
                        this.loadingSubmit = false;
                        return [3 /*break*/, 18];
                    case 14:
                        if (!!this.formData.brand_name) return [3 /*break*/, 15];
                        this.authService.alert('Ошибка', 'Требуется Марка транспорта.');
                        this.loadingSubmit = false;
                        return [3 /*break*/, 18];
                    case 15:
                        this.loadingSubmit = false;
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Ваша заявка принята на оброботку',
                                message: "<img src=\"../../assets/truck/done.png\" class=\"card-alert\">",
                                cssClass: 'custom-alert',
                                buttons: [
                                    {
                                        text: 'OK',
                                        cssClass: 'icon-alert-button',
                                        handler: function () { return __awaiter(_this, void 0, void 0, function () {
                                            var res_1, error_1;
                                            var _this = this;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        _a.trys.push([0, 2, , 3]);
                                                        return [4 /*yield*/, this.authService.Verification(this.formData.full_name, this.formData.phone, this.formData.selfies_with_passport, this.formData.bank_card, this.formData.bank_cardname, this.formData.transport_front_photo, this.formData.transport_back_photo, this.formData.transport_side_photo, this.formData.adr_photo, this.formData.transport_registration_country, this.formData.state_registration_truckNumber, this.formData.driver_license, this.formData.transportation_license_photo, this.formData.techpassport_photo1, this.formData.techpassport_photo2, this.formData.type, this.formData.brand_name).toPromise()];
                                                    case 1:
                                                        res_1 = _a.sent();
                                                        this.zone.runOutsideAngular(function () {
                                                            if (res_1.status) {
                                                                _this.loadingSubmit = false;
                                                                _this.zone.run(function () {
                                                                    _this.router.navigate(['/tabs/home']);
                                                                });
                                                            }
                                                            else {
                                                                _this.loadingSubmit = false;
                                                                _this.authService.alert('Ошибка', res_1.error);
                                                            }
                                                        });
                                                        return [3 /*break*/, 3];
                                                    case 2:
                                                        error_1 = _a.sent();
                                                        console.error('Error during verification:', error_1);
                                                        return [3 /*break*/, 3];
                                                    case 3: return [2 /*return*/];
                                                }
                                            });
                                        }); }
                                    }
                                ]
                            })];
                    case 16:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 17:
                        _a.sent();
                        _a.label = 18;
                    case 18: return [2 /*return*/];
                }
            });
        });
    };
    VerificationPage.prototype.deleteFile = function (file, field) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Удаление фото',
                            message: 'Вы уверены что хотите удалить фото паспорта?',
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
                                        var res;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, this.authService.delPhotoUser(file).toPromise()];
                                                case 1:
                                                    res = _a.sent();
                                                    if (res.status) {
                                                        this.formData[field] = '';
                                                    }
                                                    else {
                                                        this.authService.alert('Ошибка', res.error);
                                                    }
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
    VerificationPage.prototype.back = function () {
        this.navCtrl.back();
    };
    VerificationPage = __decorate([
        core_1.Component({
            selector: 'app-verification',
            templateUrl: './verification.page.html',
            styleUrls: ['./verification.page.scss']
        })
    ], VerificationPage);
    return VerificationPage;
}());
exports.VerificationPage = VerificationPage;
