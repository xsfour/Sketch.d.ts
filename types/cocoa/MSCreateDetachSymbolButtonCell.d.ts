/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCreateDetachSymbolButtonCell<T = any> extends MSHoverButtonCell {
    cxx_destruct<R = void>(): R;
    artboardPreviewImage<R = NSImage>(): R;
    setArtboardPreviewImage<R = void, P0 = NSImage>(_v: P0): R;
  }
  namespace classes {
    export interface MSCreateDetachSymbolButtonCell<T = any> extends MSHoverButtonCell {
      alloc<R = MSCreateDetachSymbolButtonCell>(): R;
      new: <R = MSCreateDetachSymbolButtonCell>() => R;
    }
  }
}

declare const MSCreateDetachSymbolButtonCell: cocoa.classes.MSCreateDetachSymbolButtonCell;
