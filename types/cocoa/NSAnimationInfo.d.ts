/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAnimationInfo<T = any> extends NSObject, NSCopyingProtocol {
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface NSAnimationInfo<T = any> extends NSObject, NSCopyingProtocol {
      alloc<R = NSAnimationInfo>(): R;
      new: <R = NSAnimationInfo>() => R;
    }
  }
}

declare const NSAnimationInfo: cocoa.classes.NSAnimationInfo;
