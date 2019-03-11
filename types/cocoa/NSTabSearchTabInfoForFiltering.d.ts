/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabSearchTabInfoForFiltering<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    initWithTitle<R = unknown, P0 = unknown>(_initWithTitle: P0): R;
    title<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface NSTabSearchTabInfoForFiltering<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSTabSearchTabInfoForFiltering>(): R;
      new: <R = NSTabSearchTabInfoForFiltering>() => R;
      infoWithTitle<R = unknown, P0 = unknown>(_infoWithTitle: P0): R;
    }
  }
}

declare const NSTabSearchTabInfoForFiltering: cocoa.classes.NSTabSearchTabInfoForFiltering;
