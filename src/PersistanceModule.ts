import { Module } from "@wildebeest/js-modules";
import { Container } from "inversify";
import { PersistanceService } from "./PersistanceService";
import { CookieStorage } from "./CookieStorage";

export class PersistanceModule implements Module
{
    getDependencies(): Array<any>
    {
        return [];
    }

    register(container: Container): void
    {
        container.bind<CookieStorage>('Storage').to(CookieStorage).whenTargetNamed('cookie');
        container.bind<PersistanceService>(PersistanceService).toSelf().inSingletonScope();
    }

    boot(container: Container): void { }
}