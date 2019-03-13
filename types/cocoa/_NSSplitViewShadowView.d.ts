/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSplitViewShadowView<T = any> extends NSView {
    getShadowImage<R = unknown>(): R;
    isOpaque<R = boolean>(): R;
    wantsUpdateLayer<R = boolean>(): R;
    shadowEdge<R = number>(): R;
    setShadowEdge<R = void, P0 = number>(_v: P0): R;
    shadowRevealAmount<R = number>(): R;
    setShadowRevealAmount<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _NSSplitViewShadowView<T = any> extends NSView {
      alloc<R = _NSSplitViewShadowView>(): R;
      new: <R = _NSSplitViewShadowView>() => R;
    }
  }
}
