/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUIActivityInfo<T = any> extends cocoa.NSObject {
    removeProvider<R = void, P0 = unknown>(_removeProvider: P0): R;
    addProvider<R = void, P0 = unknown>(_addProvider: P0): R;
    dealloc<R = void>(): R;
    automaticallyGenerated<R = boolean>(): R;
    setAutomaticallyGenerated<R = void, P0 = boolean>(_v: P0): R;
    providerCount<R = number>(): R;
    providers<R = cocoa.NSArray>(): R;
  }
  namespace classes {
    export interface NSUIActivityInfo<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSUIActivityInfo>(): R;
      new: <R = NSUIActivityInfo>() => R;
    }
  }
}

declare const NSUIActivityInfo: cocoa.classes.NSUIActivityInfo;
