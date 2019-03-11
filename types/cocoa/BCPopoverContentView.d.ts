/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCPopoverContentView<T = any> extends cocoa.NSView {
    cxx_destruct<R = void>(): R;
    backgroundPath<R = unknown>(): R;
    availableContentRect<R = cocoa.CGRect>(): R;
    cancelOperation<R = void, P0 = unknown>(_cancelOperation: P0): R;
    arrowPosition<R = number>(): R;
    setArrowPosition<R = void, P0 = number>(_v: P0): R;
    arrowEdge<R = number>(): R;
    setArrowEdge<R = void, P0 = number>(_v: P0): R;
    backgroundColor<R = cocoa.NSColor>(): R;
    setBackgroundColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
  }
  namespace classes {
    export interface BCPopoverContentView<T = any> extends cocoa.classes.NSView {
      alloc<R = BCPopoverContentView>(): R;
      new: <R = BCPopoverContentView>() => R;
    }
  }
}

declare const BCPopoverContentView: cocoa.classes.BCPopoverContentView;
