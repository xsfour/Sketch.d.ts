/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSliderKnob<T = any> extends cocoa.NSView {
    isFlipped<R = boolean>(): R;
    maskOnly<R = boolean>(): R;
    setMaskOnly<R = void, P0 = boolean>(_v: P0): R;
    drawingState<R = unknown>(): R;
    setDrawingState<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace classes {
    export interface NSSliderKnob<T = any> extends cocoa.classes.NSView {
      alloc<R = NSSliderKnob>(): R;
      new: <R = NSSliderKnob>() => R;
    }
  }
}

declare const NSSliderKnob: cocoa.classes.NSSliderKnob;
