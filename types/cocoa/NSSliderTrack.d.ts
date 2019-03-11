/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSliderTrack<T = any> extends cocoa.NSView {
    isFlipped<R = boolean>(): R;
    knobMaskFrame<R = cocoa.CGRect>(): R;
    setKnobMaskFrame<R = void, P0 = cocoa.CGRect>(_v: P0): R;
    drawingState<R = unknown>(): R;
    setDrawingState<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace classes {
    export interface NSSliderTrack<T = any> extends cocoa.classes.NSView {
      alloc<R = NSSliderTrack>(): R;
      new: <R = NSSliderTrack>() => R;
    }
  }
}

declare const NSSliderTrack: cocoa.classes.NSSliderTrack;
