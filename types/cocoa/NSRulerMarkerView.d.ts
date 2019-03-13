/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRulerMarkerView<T = any> extends NSView {
    isFlipped<R = boolean>(): R;
    setRulerMarker<R = void, P0 = unknown>(_setRulerMarker: P0): R;
    rulerMarker<R = unknown>(): R;
    updateFrame<R = void>(): R;
  }
  namespace classes {
    export interface NSRulerMarkerView<T = any> extends NSView {
      alloc<R = NSRulerMarkerView>(): R;
      new: <R = NSRulerMarkerView>() => R;
    }
  }
}

declare const NSRulerMarkerView: cocoa.classes.NSRulerMarkerView;
