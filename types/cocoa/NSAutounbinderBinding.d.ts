/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAutounbinderBinding<T = any> extends NSWeakAutounbinderBinding {}
  namespace classes {
    export interface NSAutounbinderBinding<T = any> extends NSWeakAutounbinderBinding {
      alloc<R = NSAutounbinderBinding>(): R;
      new: <R = NSAutounbinderBinding>() => R;
    }
  }
}

declare const NSAutounbinderBinding: cocoa.classes.NSAutounbinderBinding;
