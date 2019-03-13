/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileProviderMessageInterface<T = any> extends NSObject, NSSecureCodingProtocol {
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithName_itemIdentifier_providerIdentifier<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithName: P0, _itemIdentifier: P1, _providerIdentifier: P2): R;
    dealloc<R = void>(): R;
    providerIdentifier<R = NSString>(): R;
    setProviderIdentifier<R = void, P0 = NSString>(_v: P0): R;
    itemIdentifier<R = NSString>(): R;
    setItemIdentifier<R = void, P0 = NSString>(_v: P0): R;
    name<R = NSString>(): R;
  }
  namespace classes {
    export interface NSFileProviderMessageInterface<T = any> extends NSObject, NSSecureCodingProtocol {
      alloc<R = NSFileProviderMessageInterface>(): R;
      new: <R = NSFileProviderMessageInterface>() => R;
    }
  }
}

declare const NSFileProviderMessageInterface: cocoa.classes.NSFileProviderMessageInterface;
