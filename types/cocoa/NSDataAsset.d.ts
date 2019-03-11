/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDataAsset<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol {
    description<R = unknown>(): R;
    hash<R = number>(): R;
    dealloc<R = void>(): R;
    initWithName_bundle<R = unknown, P0 = unknown, P1 = unknown>(_initWithName: P0, _bundle: P1): R;
    initWithName<R = unknown, P0 = unknown>(_initWithName: P0): R;
    typeIdentifier<R = cocoa.NSString>(): R;
    data<R = cocoa.NSData>(): R;
    name<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface NSDataAsset<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol {
      alloc<R = NSDataAsset>(): R;
      new: <R = NSDataAsset>() => R;
    }
  }
}

declare const NSDataAsset: cocoa.classes.NSDataAsset;
