/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScriptClassDescriptionMoreIVars<T = any> extends NSObject {}
  namespace classes {
    export interface NSScriptClassDescriptionMoreIVars<T = any> extends NSObject {
      alloc<R = NSScriptClassDescriptionMoreIVars>(): R;
      new: <R = NSScriptClassDescriptionMoreIVars>() => R;
    }
  }
}

declare const NSScriptClassDescriptionMoreIVars: cocoa.classes.NSScriptClassDescriptionMoreIVars;
