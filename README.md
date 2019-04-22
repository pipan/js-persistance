# Persistance Module

## Installation

```sh
npm install --save @wildebeest/persistance
```

## Requirements

It's usefull to know these libraries:

* inversify
* @wildebeest/js-modules

Sometimes, you want to store data during entire session or event for some months. It may be a login token, user preferences, GDPR consent and so on. This module provide a way to read and write persistant data. In it's basic form, there is only `Cookie` storage available, but you can create your own storage and use it with this modules service.

## Use Persistant Storage

`PersistanceService` allowes you to read and write data. It does not matter where is data gonna be stored. `PersistanceService` is available via `Container`. You can find container instance in `register` and `boot` methods of your Module. Also you can use Dependency Injection and pass this service in any method as a parameter.

### Reading data

```ts
foo(persistanceService: PersistanceService): void
{
    let storedValue: any = persistanceService->read("token", null)
}
``` 
First parameter is a name of required data. Second parameter is a default value, that will be returned if no value is found. This method returns `JSON`

### Writing data

```ts
foo(persistanceService: PersistanceService): void
{
    persistanceService->write("token", {
        id: 1,
        user_name: "foo"
    });
}
``` 
First parameter is the `name` of stored data and second parameter is `value` to be stored. All data will be transformed to string and stored as a string.

## Create New Storage Type

If storing data in `Cookie` is not good enough, than you can create your own storage. All you need to do is create class that implments `Storage` interface and enable it.

```ts
class MyStorage implements Storage
{
    public length: number;
    clear(): void { ... }
    getItem(key: string): string { ... }
    key(index: number): string { ... }
    setItem(key: string, value: string): void { ... }
    removeItem(key: string): void { ... }
}
```

## Enable New Storage Type

If you have created new `Storage` type, then you have to tell `PersistanceService` to use this new storage. You cen do thad, in `boot` method of your Module, by adding these lines.

```ts
class MyModule implements Module
{
    boot(container: Container): void
    {
        let persistanceService: PersistanceService = container.get(PersistanceService);
        persistanceService.setStorage(new MyStorage());
    }
}
```