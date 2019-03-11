/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCoercionHandler<T = any> extends cocoa.NSScriptCoercionHandler {}
  namespace classes {
    export interface NSCoercionHandler<T = any> extends cocoa.classes.NSScriptCoercionHandler {
      alloc<R = NSCoercionHandler>(): R;
      new: <R = NSCoercionHandler>() => R;
    }
  }
}

declare const NSCoercionHandler: cocoa.classes.NSCoercionHandler;
