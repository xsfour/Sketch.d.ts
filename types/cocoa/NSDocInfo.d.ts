/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocInfo<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol {
    copy<R = unknown>(): R;
    initWithFileAttributes<R = unknown, P0 = unknown>(_initWithFileAttributes: P0): R;
    initFromInfo<R = unknown, P0 = cocoa.stat>(_initFromInfo: P0): R;
  }
  namespace classes {
    export interface NSDocInfo<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol {
      alloc<R = NSDocInfo>(): R;
      new: <R = NSDocInfo>() => R;
    }
  }
}

declare const NSDocInfo: cocoa.classes.NSDocInfo;
