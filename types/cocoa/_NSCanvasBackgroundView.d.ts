/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCanvasBackgroundView<T = any> extends NSView {}
  namespace classes {
    export interface _NSCanvasBackgroundView<T = any> extends NSView {
      alloc<R = _NSCanvasBackgroundView>(): R;
      new: <R = _NSCanvasBackgroundView>() => R;
    }
  }
}
