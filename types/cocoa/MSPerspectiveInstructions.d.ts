/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPerspectiveInstructions<T = any> extends cocoa.NSObject {
    applyToImage<R = unknown, P0 = unknown>(_applyToImage: P0): R;
    bottomRight<R = cocoa.CGPoint>(): R;
    setBottomRight<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    bottomLeft<R = cocoa.CGPoint>(): R;
    setBottomLeft<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    topRight<R = cocoa.CGPoint>(): R;
    setTopRight<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    topLeft<R = cocoa.CGPoint>(): R;
    setTopLeft<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    rect<R = cocoa.CGRect>(): R;
    setRect<R = void, P0 = cocoa.CGRect>(_v: P0): R;
  }
  namespace classes {
    export interface MSPerspectiveInstructions<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSPerspectiveInstructions>(): R;
      new: <R = MSPerspectiveInstructions>() => R;
    }
  }
}

declare const MSPerspectiveInstructions: cocoa.classes.MSPerspectiveInstructions;
