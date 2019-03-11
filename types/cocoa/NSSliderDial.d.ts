/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSliderDial<T = any> extends cocoa.NSView {
    isFlipped<R = boolean>(): R;
    drawingState<R = unknown>(): R;
    setDrawingState<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace classes {
    export interface NSSliderDial<T = any> extends cocoa.classes.NSView {
      alloc<R = NSSliderDial>(): R;
      new: <R = NSSliderDial>() => R;
    }
  }
}

declare const NSSliderDial: cocoa.classes.NSSliderDial;
