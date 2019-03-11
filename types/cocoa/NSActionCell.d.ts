/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSActionCell<T = any> extends cocoa.NSCell {
    controlView<R = unknown>(): R;
    setControlView<R = void, P0 = unknown>(_setControlView: P0): R;
    tag<R = number>(): R;
    setTag<R = void, P0 = number>(_v: P0): R;
    action<R = string>(): R;
    setAction<R = void, P0 = string>(_v: P0): R;
    target<R = unknown>(): R;
    setTarget<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace classes {
    export interface NSActionCell<T = any> extends cocoa.classes.NSCell {
      alloc<R = NSActionCell>(): R;
      new: <R = NSActionCell>() => R;
    }
  }
}

declare const NSActionCell: cocoa.classes.NSActionCell;
