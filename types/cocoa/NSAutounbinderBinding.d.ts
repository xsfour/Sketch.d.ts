/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAutounbinderBinding<T = any> extends cocoa.NSWeakAutounbinderBinding {}
  namespace classes {
    export interface NSAutounbinderBinding<T = any> extends cocoa.classes.NSWeakAutounbinderBinding {
      alloc<R = NSAutounbinderBinding>(): R;
      new: <R = NSAutounbinderBinding>() => R;
    }
  }
}

declare const NSAutounbinderBinding: cocoa.classes.NSAutounbinderBinding;
