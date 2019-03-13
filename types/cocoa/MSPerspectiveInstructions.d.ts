/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPerspectiveInstructions<T = any> extends NSObject {
    applyToImage<R = unknown, P0 = unknown>(_applyToImage: P0): R;
    bottomRight<R = CGPoint>(): R;
    setBottomRight<R = void, P0 = CGPoint>(_v: P0): R;
    bottomLeft<R = CGPoint>(): R;
    setBottomLeft<R = void, P0 = CGPoint>(_v: P0): R;
    topRight<R = CGPoint>(): R;
    setTopRight<R = void, P0 = CGPoint>(_v: P0): R;
    topLeft<R = CGPoint>(): R;
    setTopLeft<R = void, P0 = CGPoint>(_v: P0): R;
    rect<R = CGRect>(): R;
    setRect<R = void, P0 = CGRect>(_v: P0): R;
  }
  namespace classes {
    export interface MSPerspectiveInstructions<T = any> extends NSObject {
      alloc<R = MSPerspectiveInstructions>(): R;
      new: <R = MSPerspectiveInstructions>() => R;
    }
  }
}

declare const MSPerspectiveInstructions: cocoa.classes.MSPerspectiveInstructions;
