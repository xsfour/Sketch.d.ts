/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSImageURLReferencingRepProvider<T = any> extends NSObject, NSCopyingProtocol {
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithURL<R = unknown, P0 = unknown>(_initWithURL: P0): R;
    url<R = NSURL>(): R;
    representations<R = NSArray>(): R;
  }
  namespace classes {
    export interface NSImageURLReferencingRepProvider<T = any> extends NSObject, NSCopyingProtocol {
      alloc<R = NSImageURLReferencingRepProvider>(): R;
      new: <R = NSImageURLReferencingRepProvider>() => R;
    }
  }
}

declare const NSImageURLReferencingRepProvider: cocoa.classes.NSImageURLReferencingRepProvider;
