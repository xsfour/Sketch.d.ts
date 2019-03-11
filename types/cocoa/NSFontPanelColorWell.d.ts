/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFontPanelColorWell<T = any> extends cocoa.NSColorWell {
    _drawColor<R = boolean, P0 = boolean>(__drawColor: P0): R;
    _commonInit<R = void>(): R;
    setColor<R = void, P0 = unknown>(_setColor: P0): R;
    _bezelRenderingButton<R = unknown>(): R;
    bezelImage<R = cocoa.NSImage>(): R;
    setBezelImage<R = void, P0 = cocoa.NSImage>(_v: P0): R;
  }
  namespace classes {
    export interface NSFontPanelColorWell<T = any> extends cocoa.classes.NSColorWell {
      alloc<R = NSFontPanelColorWell>(): R;
      new: <R = NSFontPanelColorWell>() => R;
    }
  }
}

declare const NSFontPanelColorWell: cocoa.classes.NSFontPanelColorWell;
