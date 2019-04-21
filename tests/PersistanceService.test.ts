import 'ts-jest';
import { Application } from '@wildebeest/js-modules';
import { PersistanceModule } from '../src/PersistanceModule';
import { PersistanceService } from '../src/PersistanceService';
import { CookieStorage } from '../src/CookieStorage';

let app: Application = new Application();
app.run([PersistanceModule]);
let persistanceService: PersistanceService = app.getContainer().get(PersistanceService);

test.each([[new CookieStorage()]])("write and read", (storage: Storage) => {
    persistanceService.setStorage(storage);
    persistanceService.write("test", "value");
    expect(persistanceService.read("test", "default")).toEqual("value");
});

test.each([[new CookieStorage()]])("read deafault", (storage: Storage) => {
    persistanceService.setStorage(storage);
    expect(persistanceService.read("test2", "default")).toEqual("default");
});