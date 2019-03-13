/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScriptCommandMoreIVars<T = any> extends NSObject {}
  namespace classes {
    export interface NSScriptCommandMoreIVars<T = any> extends NSObject {
      alloc<R = NSScriptCommandMoreIVars>(): R;
      new: <R = NSScriptCommandMoreIVars>() => R;
    }
  }
}

declare const NSScriptCommandMoreIVars: cocoa.classes.NSScriptCommandMoreIVars;
