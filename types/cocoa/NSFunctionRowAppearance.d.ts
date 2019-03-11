/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFunctionRowAppearance<T = any> extends cocoa.NSBuiltinAppearance {}
  namespace classes {
    export interface NSFunctionRowAppearance<T = any> extends cocoa.classes.NSBuiltinAppearance {
      alloc<R = NSFunctionRowAppearance>(): R;
      new: <R = NSFunctionRowAppearance>() => R;
    }
  }
}

declare const NSFunctionRowAppearance: cocoa.classes.NSFunctionRowAppearance;
