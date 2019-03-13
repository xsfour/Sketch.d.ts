/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSliderTickMarks<T = any> extends NSView {
    cxx_destruct<R = void>(): R;
    isFlipped<R = boolean>(): R;
    drawingState<R = unknown>(): R;
    setDrawingState<R = void, P0 = unknown>(_v: P0): R;
    delegate<R = NSSliderTickMarksDelegate>(): R;
    setDelegate<R = void, P0 = NSSliderTickMarksDelegate>(_v: P0): R;
  }
  namespace classes {
    export interface NSSliderTickMarks<T = any> extends NSView {
      alloc<R = NSSliderTickMarks>(): R;
      new: <R = NSSliderTickMarks>() => R;
    }
  }
}

declare const NSSliderTickMarks: cocoa.classes.NSSliderTickMarks;
