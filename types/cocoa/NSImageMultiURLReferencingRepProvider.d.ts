/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSImageMultiURLReferencingRepProvider<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol {
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithURLs<R = unknown, P0 = unknown>(_initWithURLs: P0): R;
    urls<R = cocoa.NSArray>(): R;
    representations<R = cocoa.NSArray>(): R;
  }
  namespace classes {
    export interface NSImageMultiURLReferencingRepProvider<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol {
      alloc<R = NSImageMultiURLReferencingRepProvider>(): R;
      new: <R = NSImageMultiURLReferencingRepProvider>() => R;
    }
  }
}

declare const NSImageMultiURLReferencingRepProvider: cocoa.classes.NSImageMultiURLReferencingRepProvider;
