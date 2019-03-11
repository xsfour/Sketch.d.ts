/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSImageISIconRepProvider<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol {
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithISIcon<R = unknown, P0 = unknown>(_initWithISIcon: P0): R;
    representations<R = cocoa.NSArray>(): R;
  }
  namespace classes {
    export interface NSImageISIconRepProvider<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol {
      alloc<R = NSImageISIconRepProvider>(): R;
      new: <R = NSImageISIconRepProvider>() => R;
    }
  }
}

declare const NSImageISIconRepProvider: cocoa.classes.NSImageISIconRepProvider;
