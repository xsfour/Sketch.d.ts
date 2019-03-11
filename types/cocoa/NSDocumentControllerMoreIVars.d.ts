/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocumentControllerMoreIVars<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface NSDocumentControllerMoreIVars<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSDocumentControllerMoreIVars>(): R;
      new: <R = NSDocumentControllerMoreIVars>() => R;
    }
  }
}

declare const NSDocumentControllerMoreIVars: cocoa.classes.NSDocumentControllerMoreIVars;
