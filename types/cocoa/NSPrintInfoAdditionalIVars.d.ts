/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPrintInfoAdditionalIVars<T = any> extends NSObject {}
  namespace classes {
    export interface NSPrintInfoAdditionalIVars<T = any> extends NSObject {
      alloc<R = NSPrintInfoAdditionalIVars>(): R;
      new: <R = NSPrintInfoAdditionalIVars>() => R;
    }
  }
}

declare const NSPrintInfoAdditionalIVars: cocoa.classes.NSPrintInfoAdditionalIVars;
