/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCPopoverWindow<T = any> extends NSWindow {
    arrowView<R = unknown>(): R;
    collectionBehavior<R = number>(): R;
    canBecomeKeyWindow<R = boolean>(): R;
    initWithContentRect<R = unknown, P0 = CGRect>(_initWithContentRect: P0): R;
    arrowPosition<R = number>(): R;
    setArrowPosition<R = void, P0 = number>(_v: P0): R;
    arrowEdge<R = number>(): R;
    setArrowEdge<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface BCPopoverWindow<T = any> extends NSWindow {
      alloc<R = BCPopoverWindow>(): R;
      new: <R = BCPopoverWindow>() => R;
      attachedWindowWithView<R = unknown, P0 = unknown>(_attachedWindowWithView: P0): R;
    }
  }
}

declare const BCPopoverWindow: cocoa.classes.BCPopoverWindow;
