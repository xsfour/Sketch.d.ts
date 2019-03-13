/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileWrapperMoreIVars<T = any> extends NSObject {}
  namespace classes {
    export interface NSFileWrapperMoreIVars<T = any> extends NSObject {
      alloc<R = NSFileWrapperMoreIVars>(): R;
      new: <R = NSFileWrapperMoreIVars>() => R;
    }
  }
}

declare const NSFileWrapperMoreIVars: cocoa.classes.NSFileWrapperMoreIVars;
