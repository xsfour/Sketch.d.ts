/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOverlayColorSettings<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    symbolTitleColor<R = cocoa.NSColor>(): R;
    setSymbolTitleColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    artboardTitleColor<R = cocoa.NSColor>(): R;
    setArtboardTitleColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    sliceOutlineColor<R = cocoa.NSColor>(): R;
    setSliceOutlineColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    pixelGridColor<R = cocoa.NSColor>(): R;
    setPixelGridColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    pageBackgroundColor<R = cocoa.NSColor>(): R;
    setPageBackgroundColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    canvasBackgroundColor<R = cocoa.NSColor>(): R;
    setCanvasBackgroundColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
  }
  namespace classes {
    export interface MSOverlayColorSettings<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSOverlayColorSettings>(): R;
      new: <R = MSOverlayColorSettings>() => R;
      colorSettings<R = unknown>(): R;
    }
  }
}

declare const MSOverlayColorSettings: cocoa.classes.MSOverlayColorSettings;
