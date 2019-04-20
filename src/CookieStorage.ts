import { injectable } from "inversify";
import * as Cookies from 'js-cookie';

@injectable()
export class CookieStorage implements Storage
{
    public length: number = 0;

    clear(): void
    {
        document.cookie = "";
    }

    getItem(key: string): string
    {
        return Cookies.get(key);
    }

    key(index: number): string
    {
        let all: Array<string> = document.cookie.split(";");
        if (all.length >= index) {
            return null;
        }
        let item: Array<string> = all[index].split("=");
        if (item.length != 2) {
            return null;
        }
        return item[0];
    }

    setItem(key: string, value: string): void
    {
        return Cookies.set(key, value);
    }

    removeItem(key: string): void
    {
        Cookies.remove(key);
    }
}