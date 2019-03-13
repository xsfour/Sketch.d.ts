/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSObjectSpecifier<T = any> extends NSScriptObjectSpecifier {}
  namespace classes {
    export interface NSObjectSpecifier<T = any> extends NSScriptObjectSpecifier {
      alloc<R = NSObjectSpecifier>(): R;
      new: <R = NSObjectSpecifier>() => R;
    }
  }
}

declare const NSObjectSpecifier: cocoa.classes.NSObjectSpecifier;
