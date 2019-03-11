/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBuiltinAppearance<T = any> extends cocoa.NSAppearance {
    name<R = unknown>(): R;
    initWithBundleResourceName_publicName<R = unknown, P0 = unknown, P1 = unknown>(_initWithBundleResourceName: P0, _publicName: P1): R;
  }
  namespace classes {
    export interface NSBuiltinAppearance<T = any> extends cocoa.classes.NSAppearance {
      alloc<R = NSBuiltinAppearance>(): R;
      new: <R = NSBuiltinAppearance>() => R;
    }
  }
}

declare const NSBuiltinAppearance: cocoa.classes.NSBuiltinAppearance;
