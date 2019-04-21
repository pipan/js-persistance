export declare class CookieStorage implements Storage {
    length: number;
    clear(): void;
    getItem(key: string): string;
    key(index: number): string;
    setItem(key: string, value: string): void;
    removeItem(key: string): void;
    protected recalcLength(): void;
}
