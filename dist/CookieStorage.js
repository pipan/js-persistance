"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var Cookies = require("js-cookie");
var CookieStorage = (function () {
    function CookieStorage() {
        this.length = 0;
    }
    CookieStorage.prototype.clear = function () {
        for (var i = 0; i < this.length; i++) {
            this.removeItem(this.key(i));
        }
        this.recalcLength();
    };
    CookieStorage.prototype.getItem = function (key) {
        return Cookies.get(key);
    };
    CookieStorage.prototype.key = function (index) {
        var all = document.cookie.split(";");
        if (all.length <= index) {
            return null;
        }
        var item = all[index].split("=");
        if (item.length != 2) {
            return null;
        }
        return item[0];
    };
    CookieStorage.prototype.setItem = function (key, value) {
        Cookies.set(key, value);
        this.recalcLength();
    };
    CookieStorage.prototype.removeItem = function (key) {
        Cookies.remove(key);
        this.recalcLength();
    };
    CookieStorage.prototype.recalcLength = function () {
        if (document.cookie == "") {
            this.length = 0;
        }
        else {
            this.length = document.cookie.split(";").length;
        }
    };
    CookieStorage = __decorate([
        inversify_1.injectable()
    ], CookieStorage);
    return CookieStorage;
}());
exports.CookieStorage = CookieStorage;
//# sourceMappingURL=CookieStorage.js.map