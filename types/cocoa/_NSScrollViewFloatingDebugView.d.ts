/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrollViewFloatingDebugView<T = any> extends NSView {
    wantsUpdateLayer<R = boolean>(): R;
    _setDebugColor<R = void, P0 = unknown>(__setDebugColor: P0): R;
  }
  namespace classes {
    export interface _NSScrollViewFloatingDebugView<T = any> extends NSView {
      alloc<R = _NSScrollViewFloatingDebugView>(): R;
      new: <R = _NSScrollViewFloatingDebugView>() => R;
    }
  }
}
