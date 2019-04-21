import 'ts-jest';
import { Application } from '@wildebeest/js-modules';
import { PersistanceModule } from '../src/PersistanceModule';
import { CookieStorage } from '../src/CookieStorage';

let app: Application = new Application();
app.run([PersistanceModule]);
let cookieStorage: CookieStorage = app.getContainer().getNamed('Storage', 'cookie');

test("set item", () => {
    cookieStorage.setItem("test_cookie", "test");
    expect(document.cookie).toEqual("test_cookie=test");
    expect(cookieStorage.length).toBe(1);
});

test("clear", () => {
    cookieStorage.setItem("test_cookie", "test");
    cookieStorage.clear();
    expect(document.cookie).toEqual("");
    expect(cookieStorage.length).toBe(0);
});

test("key", () => {
    expect(cookieStorage.key(0)).toEqual(null);

    cookieStorage.setItem("test_cookie", "test");
    expect(cookieStorage.key(0)).toEqual("test_cookie");

    expect(cookieStorage.key(1)).toEqual(null);
});

test("remove item", () => {
    cookieStorage.setItem("test_cookie", "test");
    cookieStorage.removeItem("test_cookie");
    expect(document.cookie).toEqual("");
    expect(cookieStorage.length).toBe(0);
});