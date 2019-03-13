/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocumentControllerMoreIVars<T = any> extends NSObject {}
  namespace classes {
    export interface NSDocumentControllerMoreIVars<T = any> extends NSObject {
      alloc<R = NSDocumentControllerMoreIVars>(): R;
      new: <R = NSDocumentControllerMoreIVars>() => R;
    }
  }
}

declare const NSDocumentControllerMoreIVars: cocoa.classes.NSDocumentControllerMoreIVars;
