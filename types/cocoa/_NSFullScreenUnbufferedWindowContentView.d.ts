/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFullScreenUnbufferedWindowContentView<T = any> extends NSView {
    isOpaque<R = boolean>(): R;
  }
  namespace classes {
    export interface _NSFullScreenUnbufferedWindowContentView<T = any> extends NSView {
      alloc<R = _NSFullScreenUnbufferedWindowContentView>(): R;
      new: <R = _NSFullScreenUnbufferedWindowContentView>() => R;
    }
  }
}
