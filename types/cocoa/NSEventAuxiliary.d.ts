/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSEventAuxiliary<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface NSEventAuxiliary<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSEventAuxiliary>(): R;
      new: <R = NSEventAuxiliary>() => R;
    }
  }
}

declare const NSEventAuxiliary: cocoa.classes.NSEventAuxiliary;
