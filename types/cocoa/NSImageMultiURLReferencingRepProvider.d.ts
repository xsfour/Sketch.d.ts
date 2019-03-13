/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSImageMultiURLReferencingRepProvider<T = any> extends NSObject, NSCopyingProtocol {
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithURLs<R = unknown, P0 = unknown>(_initWithURLs: P0): R;
    urls<R = NSArray>(): R;
    representations<R = NSArray>(): R;
  }
  namespace classes {
    export interface NSImageMultiURLReferencingRepProvider<T = any> extends NSObject, NSCopyingProtocol {
      alloc<R = NSImageMultiURLReferencingRepProvider>(): R;
      new: <R = NSImageMultiURLReferencingRepProvider>() => R;
    }
  }
}

declare const NSImageMultiURLReferencingRepProvider: cocoa.classes.NSImageMultiURLReferencingRepProvider;
