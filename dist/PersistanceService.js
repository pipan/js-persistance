"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var PersistanceService = (function () {
    function PersistanceService(storage) {
        this.setStorage(storage);
    }
    PersistanceService.prototype.setStorage = function (storage) {
        this.storage = storage;
    };
    PersistanceService.prototype.read = function (key, def) {
        if (def === void 0) { def = false; }
        var value = this.storage.getItem(key);
        if (!value) {
            return def;
        }
        return JSON.parse(value);
    };
    PersistanceService.prototype.write = function (key, value) {
        this.storage.setItem(key, JSON.stringify(value));
    };
    PersistanceService = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject('Storage')), __param(0, inversify_1.named('cookie')),
        __metadata("design:paramtypes", [Storage])
    ], PersistanceService);
    return PersistanceService;
}());
exports.PersistanceService = PersistanceService;
//# sourceMappingURL=PersistanceService.js.map