/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScriptExecutionContextMoreIVars<T = any> extends NSObject {}
  namespace classes {
    export interface NSScriptExecutionContextMoreIVars<T = any> extends NSObject {
      alloc<R = NSScriptExecutionContextMoreIVars>(): R;
      new: <R = NSScriptExecutionContextMoreIVars>() => R;
    }
  }
}

declare const NSScriptExecutionContextMoreIVars: cocoa.classes.NSScriptExecutionContextMoreIVars;
