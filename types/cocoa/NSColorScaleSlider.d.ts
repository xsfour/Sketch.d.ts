/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorScaleSlider<T = any> extends NSSlider {
    setColor<R = void, P0 = unknown>(_setColor: P0): R;
    setDrawsTrackAsColorScaleType<R = void, P0 = number>(_setDrawsTrackAsColorScaleType: P0): R;
    flippedHorizontally<R = boolean>(): R;
    setFlippedHorizontally<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface NSColorScaleSlider<T = any> extends NSSlider {
      alloc<R = NSColorScaleSlider>(): R;
      new: <R = NSColorScaleSlider>() => R;
    }
  }
}

declare const NSColorScaleSlider: cocoa.classes.NSColorScaleSlider;
