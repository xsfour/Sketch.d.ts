/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAnimationInfo<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol {
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface NSAnimationInfo<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol {
      alloc<R = NSAnimationInfo>(): R;
      new: <R = NSAnimationInfo>() => R;
    }
  }
}

declare const NSAnimationInfo: cocoa.classes.NSAnimationInfo;
