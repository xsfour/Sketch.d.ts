/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDraggingDestinationView<T = any> extends NSView {
    isFlipped<R = boolean>(): R;
    isOpaque<R = boolean>(): R;
    backgroundStyle<R = number>(): R;
    setBackgroundStyle<R = void, P0 = number>(_v: P0): R;
    draggingDestinationStyle<R = number>(): R;
    setDraggingDestinationStyle<R = void, P0 = number>(_v: P0): R;
    feedbackStyle<R = number>(): R;
    setFeedbackStyle<R = void, P0 = number>(_v: P0): R;
    color<R = NSColor>(): R;
    setColor<R = void, P0 = NSColor>(_v: P0): R;
    flashing<R = boolean>(): R;
    setFlashing<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface NSDraggingDestinationView<T = any> extends NSView {
      alloc<R = NSDraggingDestinationView>(): R;
      new: <R = NSDraggingDestinationView>() => R;
    }
  }
}

declare const NSDraggingDestinationView: cocoa.classes.NSDraggingDestinationView;
