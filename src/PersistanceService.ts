import { injectable, inject, named } from "inversify";

@injectable()
export class PersistanceService
{
    protected storage: Storage;

    constructor(@inject('Storage') @named('cookie') storage: Storage)
    {
        this.setStorage(storage);
    }

    public setStorage(storage: Storage)
    {
        this.storage = storage;
    }

    public read(key: string, def: any = false): any
    {
        let value = this.storage.getItem(key);
        if (!value) {
            return def;
        }
        return JSON.parse(value);
    }

    public write(key: string, value: any): void
    {
        this.storage.setItem(key, JSON.stringify(value))    ;
    }
}