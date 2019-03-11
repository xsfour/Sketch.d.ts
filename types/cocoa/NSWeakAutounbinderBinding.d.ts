/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWeakAutounbinderBinding<T = any> extends cocoa.NSObject {
    hash<R = number>(): R;
    dealloc<R = void>(): R;
    initWithName_boundObject<R = unknown, P0 = unknown, P1 = unknown>(_initWithName: P0, _boundObject: P1): R;
  }
  namespace classes {
    export interface NSWeakAutounbinderBinding<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSWeakAutounbinderBinding>(): R;
      new: <R = NSWeakAutounbinderBinding>() => R;
    }
  }
}

declare const NSWeakAutounbinderBinding: cocoa.classes.NSWeakAutounbinderBinding;
