"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PersistanceService_1 = require("./PersistanceService");
var CookieStorage_1 = require("./CookieStorage");
var PersistanceModule = (function () {
    function PersistanceModule() {
    }
    PersistanceModule.prototype.getDependencies = function () {
        return [];
    };
    PersistanceModule.prototype.register = function (container) {
        container.bind('Storage').to(CookieStorage_1.CookieStorage).whenTargetNamed('cookie');
        container.bind(PersistanceService_1.PersistanceService).toSelf().inSingletonScope();
    };
    PersistanceModule.prototype.boot = function (container) { };
    return PersistanceModule;
}());
exports.PersistanceModule = PersistanceModule;
//# sourceMappingURL=PersistanceModule.js.map