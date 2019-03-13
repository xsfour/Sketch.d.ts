/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFontPanelColorWell<T = any> extends NSColorWell {
    _drawColor<R = boolean, P0 = boolean>(__drawColor: P0): R;
    _commonInit<R = void>(): R;
    setColor<R = void, P0 = unknown>(_setColor: P0): R;
    _bezelRenderingButton<R = unknown>(): R;
    bezelImage<R = NSImage>(): R;
    setBezelImage<R = void, P0 = NSImage>(_v: P0): R;
  }
  namespace classes {
    export interface NSFontPanelColorWell<T = any> extends NSColorWell {
      alloc<R = NSFontPanelColorWell>(): R;
      new: <R = NSFontPanelColorWell>() => R;
    }
  }
}

declare const NSFontPanelColorWell: cocoa.classes.NSFontPanelColorWell;
