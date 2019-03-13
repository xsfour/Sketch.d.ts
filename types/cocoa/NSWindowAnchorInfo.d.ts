/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWindowAnchorInfo<T = any> extends NSObject, NSCopyingProtocol {
    dealloc<R = void>(): R;
    verticalAttribute<R = number>(): R;
    setVerticalAttribute<R = void, P0 = number>(_v: P0): R;
    horizontalAttribute<R = number>(): R;
    setHorizontalAttribute<R = void, P0 = number>(_v: P0): R;
    verticalItem<R = unknown>(): R;
    setVerticalItem<R = void, P0 = unknown>(_v: P0): R;
    horizontalItem<R = unknown>(): R;
    setHorizontalItem<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace classes {
    export interface NSWindowAnchorInfo<T = any> extends NSObject, NSCopyingProtocol {
      alloc<R = NSWindowAnchorInfo>(): R;
      new: <R = NSWindowAnchorInfo>() => R;
    }
  }
}

declare const NSWindowAnchorInfo: cocoa.classes.NSWindowAnchorInfo;
