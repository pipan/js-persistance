import 'ts-jest';
import { Application } from '@wildebeest/js-modules';
import { PersistanceModule } from '../src/PersistanceModule';
import { PersistanceService } from '../src/PersistanceService';
import { CookieStorage } from '../src/CookieStorage';

let app: Application = new Application();
app.run([PersistanceModule]);

test("registering services", () => {
    expect(app.getContainer().get(PersistanceService)).toBeInstanceOf(PersistanceService);
    expect(app.getContainer().getNamed('Storage', 'cookie')).toBeInstanceOf(CookieStorage);
});