/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScriptCommandDescriptionMoreIVars<T = any> extends NSObject {}
  namespace classes {
    export interface NSScriptCommandDescriptionMoreIVars<T = any> extends NSObject {
      alloc<R = NSScriptCommandDescriptionMoreIVars>(): R;
      new: <R = NSScriptCommandDescriptionMoreIVars>() => R;
    }
  }
}

declare const NSScriptCommandDescriptionMoreIVars: cocoa.classes.NSScriptCommandDescriptionMoreIVars;
