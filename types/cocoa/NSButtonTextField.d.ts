/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSButtonTextField<T = any> extends cocoa.NSTextField {}
  namespace classes {
    export interface NSButtonTextField<T = any> extends cocoa.classes.NSTextField {
      alloc<R = NSButtonTextField>(): R;
      new: <R = NSButtonTextField>() => R;
    }
  }
}

declare const NSButtonTextField: cocoa.classes.NSButtonTextField;
