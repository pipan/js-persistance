export declare class PersistanceService {
    protected storage: Storage;
    constructor(storage: Storage);
    setStorage(storage: Storage): void;
    read(key: string, def?: any): any;
    write(key: string, value: any): void;
}
