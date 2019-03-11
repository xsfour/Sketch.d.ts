/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSImageURLReferencingRepProvider<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol {
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithURL<R = unknown, P0 = unknown>(_initWithURL: P0): R;
    url<R = cocoa.NSURL>(): R;
    representations<R = cocoa.NSArray>(): R;
  }
  namespace classes {
    export interface NSImageURLReferencingRepProvider<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol {
      alloc<R = NSImageURLReferencingRepProvider>(): R;
      new: <R = NSImageURLReferencingRepProvider>() => R;
    }
  }
}

declare const NSImageURLReferencingRepProvider: cocoa.classes.NSImageURLReferencingRepProvider;
