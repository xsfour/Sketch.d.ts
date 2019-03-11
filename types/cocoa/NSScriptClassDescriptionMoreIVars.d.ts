/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScriptClassDescriptionMoreIVars<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface NSScriptClassDescriptionMoreIVars<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSScriptClassDescriptionMoreIVars>(): R;
      new: <R = NSScriptClassDescriptionMoreIVars>() => R;
    }
  }
}

declare const NSScriptClassDescriptionMoreIVars: cocoa.classes.NSScriptClassDescriptionMoreIVars;
