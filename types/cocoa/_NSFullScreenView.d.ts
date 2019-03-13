/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFullScreenView<T = any> extends NSView {
    isOpaque<R = boolean>(): R;
    initWithColor<R = unknown, P0 = unknown>(_initWithColor: P0): R;
  }
  namespace classes {
    export interface _NSFullScreenView<T = any> extends NSView {
      alloc<R = _NSFullScreenView>(): R;
      new: <R = _NSFullScreenView>() => R;
    }
  }
}
