/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCMagnifierWindowContentView<T = any> extends cocoa.NSView {
    cxx_destruct<R = void>(): R;
    drawMiddlePixel<R = void>(): R;
    drawPixelLines<R = void>(): R;
    drawBlackBorder<R = void, P0 = unknown>(_drawBlackBorder: P0): R;
    drawCurrentColorValues<R = void>(): R;
    drawMagnifiedImage<R = void>(): R;
    currentColor<R = cocoa.BCFlexibleColor>(): R;
    setCurrentColor<R = void, P0 = cocoa.BCFlexibleColor>(_v: P0): R;
    screenGrab<R = cocoa.BCScreenGrab>(): R;
    setScreenGrab<R = void, P0 = cocoa.BCScreenGrab>(_v: P0): R;
  }
  namespace classes {
    export interface BCMagnifierWindowContentView<T = any> extends cocoa.classes.NSView {
      alloc<R = BCMagnifierWindowContentView>(): R;
      new: <R = BCMagnifierWindowContentView>() => R;
    }
  }
}

declare const BCMagnifierWindowContentView: cocoa.classes.BCMagnifierWindowContentView;
