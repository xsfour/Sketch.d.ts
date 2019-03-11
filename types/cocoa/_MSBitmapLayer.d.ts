/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSBitmapLayer<T = any> extends cocoa.MSStyledLayer {
    intendedDPI<R = number>(): R;
    setIntendedDPI<R = void, P0 = number>(_v: P0): R;
    image<R = cocoa.MSImageData>(): R;
    setImage<R = void, P0 = cocoa.MSImageData>(_v: P0): R;
    fillReplacesImage<R = boolean>(): R;
    setFillReplacesImage<R = void, P0 = boolean>(_v: P0): R;
    clippingMask<R = cocoa.CGRect>(): R;
    setClippingMask<R = void, P0 = cocoa.CGRect>(_v: P0): R;
  }
  namespace classes {
    export interface _MSBitmapLayer<T = any> extends cocoa.classes.MSStyledLayer {
      alloc<R = _MSBitmapLayer>(): R;
      new: <R = _MSBitmapLayer>() => R;
    }
  }
}
