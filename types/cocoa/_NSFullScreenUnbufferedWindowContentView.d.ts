/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFullScreenUnbufferedWindowContentView<T = any> extends cocoa.NSView {
    isOpaque<R = boolean>(): R;
  }
  namespace classes {
    export interface _NSFullScreenUnbufferedWindowContentView<T = any> extends cocoa.classes.NSView {
      alloc<R = _NSFullScreenUnbufferedWindowContentView>(): R;
      new: <R = _NSFullScreenUnbufferedWindowContentView>() => R;
    }
  }
}
