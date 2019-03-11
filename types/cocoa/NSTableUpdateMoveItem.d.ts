/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableUpdateMoveItem<T = any> extends cocoa.NSTableUpdateItem2 {
    initMoveWithOriginalRow<R = unknown, P0 = number>(_initMoveWithOriginalRow: P0): R;
    initMoveWithOriginalRow_animation<R = unknown, P0 = number, P1 = number>(_initMoveWithOriginalRow: P0, _animation: P1): R;
  }
  namespace classes {
    export interface NSTableUpdateMoveItem<T = any> extends cocoa.classes.NSTableUpdateItem2 {
      alloc<R = NSTableUpdateMoveItem>(): R;
      new: <R = NSTableUpdateMoveItem>() => R;
    }
  }
}

declare const NSTableUpdateMoveItem: cocoa.classes.NSTableUpdateMoveItem;
