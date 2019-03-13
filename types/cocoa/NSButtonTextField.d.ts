/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSButtonTextField<T = any> extends NSTextField {}
  namespace classes {
    export interface NSButtonTextField<T = any> extends NSTextField {
      alloc<R = NSButtonTextField>(): R;
      new: <R = NSButtonTextField>() => R;
    }
  }
}

declare const NSButtonTextField: cocoa.classes.NSButtonTextField;
