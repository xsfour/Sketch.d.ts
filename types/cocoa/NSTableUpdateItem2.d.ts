/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableUpdateItem2<T = any> extends cocoa.NSObject {
    description<R = unknown>(): R;
    initWithRowAnimation<R = unknown, P0 = number>(_initWithRowAnimation: P0): R;
    originalRow<R = number>(): R;
    setOriginalRow<R = void, P0 = number>(_v: P0): R;
    rowAnimation<R = number>(): R;
  }
  namespace classes {
    export interface NSTableUpdateItem2<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSTableUpdateItem2>(): R;
      new: <R = NSTableUpdateItem2>() => R;
    }
  }
}

declare const NSTableUpdateItem2: cocoa.classes.NSTableUpdateItem2;
