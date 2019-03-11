/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCreateDetachSymbolButtonCell<T = any> extends cocoa.MSHoverButtonCell {
    cxx_destruct<R = void>(): R;
    artboardPreviewImage<R = cocoa.NSImage>(): R;
    setArtboardPreviewImage<R = void, P0 = cocoa.NSImage>(_v: P0): R;
  }
  namespace classes {
    export interface MSCreateDetachSymbolButtonCell<T = any> extends cocoa.classes.MSHoverButtonCell {
      alloc<R = MSCreateDetachSymbolButtonCell>(): R;
      new: <R = MSCreateDetachSymbolButtonCell>() => R;
    }
  }
}

declare const MSCreateDetachSymbolButtonCell: cocoa.classes.MSCreateDetachSymbolButtonCell;
