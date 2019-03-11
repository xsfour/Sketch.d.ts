/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSImageIconRefRepProvider<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol {
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithIconRef<R = unknown, P0 = cocoa.OpaqueIconRef>(_initWithIconRef: P0): R;
    representations<R = cocoa.NSArray>(): R;
  }
  namespace classes {
    export interface NSImageIconRefRepProvider<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol {
      alloc<R = NSImageIconRefRepProvider>(): R;
      new: <R = NSImageIconRefRepProvider>() => R;
    }
  }
}

declare const NSImageIconRefRepProvider: cocoa.classes.NSImageIconRefRepProvider;
