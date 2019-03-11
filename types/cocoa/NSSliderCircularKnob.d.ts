/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSliderCircularKnob<T = any> extends cocoa.NSView {
    isFlipped<R = boolean>(): R;
    drawingState<R = unknown>(): R;
    setDrawingState<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace classes {
    export interface NSSliderCircularKnob<T = any> extends cocoa.classes.NSView {
      alloc<R = NSSliderCircularKnob>(): R;
      new: <R = NSSliderCircularKnob>() => R;
    }
  }
}

declare const NSSliderCircularKnob: cocoa.classes.NSSliderCircularKnob;
