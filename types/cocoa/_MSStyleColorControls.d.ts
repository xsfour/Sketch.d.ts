/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSStyleColorControls<T = any> extends MSStylePart {
    saturation<R = number>(): R;
    setSaturation<R = void, P0 = number>(_v: P0): R;
    hue<R = number>(): R;
    setHue<R = void, P0 = number>(_v: P0): R;
    contrast<R = number>(): R;
    setContrast<R = void, P0 = number>(_v: P0): R;
    brightness<R = number>(): R;
    setBrightness<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _MSStyleColorControls<T = any> extends MSStylePart {
      alloc<R = _MSStyleColorControls>(): R;
      new: <R = _MSStyleColorControls>() => R;
    }
  }
}
