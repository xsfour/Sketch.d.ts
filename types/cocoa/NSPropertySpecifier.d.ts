/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPropertySpecifier<T = any> extends NSScriptObjectSpecifier {}
  namespace classes {
    export interface NSPropertySpecifier<T = any> extends NSScriptObjectSpecifier {
      alloc<R = NSPropertySpecifier>(): R;
      new: <R = NSPropertySpecifier>() => R;
    }
  }
}

declare const NSPropertySpecifier: cocoa.classes.NSPropertySpecifier;
