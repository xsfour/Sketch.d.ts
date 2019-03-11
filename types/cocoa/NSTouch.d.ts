/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouch<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol {
    deviceSize<R = cocoa.CGSize>(): R;
  }
  namespace classes {
    export interface NSTouch<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol {
      alloc<R = NSTouch>(): R;
      new: <R = NSTouch>() => R;
    }
  }
}

declare const NSTouch: cocoa.classes.NSTouch;
