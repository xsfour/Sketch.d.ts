/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouch<T = any> extends NSObject, NSCopyingProtocol {
    deviceSize<R = CGSize>(): R;
  }
  namespace classes {
    export interface NSTouch<T = any> extends NSObject, NSCopyingProtocol {
      alloc<R = NSTouch>(): R;
      new: <R = NSTouch>() => R;
    }
  }
}

declare const NSTouch: cocoa.classes.NSTouch;
