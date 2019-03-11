/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorScaleSliderCell<T = any> extends cocoa.NSSliderCell {
    setColor<R = void, P0 = unknown>(_setColor: P0): R;
    setDrawsTrackAsColorScaleType<R = void, P0 = number>(_setDrawsTrackAsColorScaleType: P0): R;
    _computeColorScaleIfNecessaryWithSize<R = void, P0 = cocoa.CGSize>(__computeColorScaleIfNecessaryWithSize: P0): R;
    flippedHorizontally<R = boolean>(): R;
    setFlippedHorizontally<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface NSColorScaleSliderCell<T = any> extends cocoa.classes.NSSliderCell {
      alloc<R = NSColorScaleSliderCell>(): R;
      new: <R = NSColorScaleSliderCell>() => R;
    }
  }
}

declare const NSColorScaleSliderCell: cocoa.classes.NSColorScaleSliderCell;
