/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPopUpButtonTextAndRightEdgeImageCell<T = any> extends cocoa.NSPopUpButtonCell {
    cxx_destruct<R = void>(): R;
    rightEdgeImage<R = cocoa.NSImage>(): R;
    setRightEdgeImage<R = void, P0 = cocoa.NSImage>(_v: P0): R;
  }
  namespace classes {
    export interface MSPopUpButtonTextAndRightEdgeImageCell<T = any> extends cocoa.classes.NSPopUpButtonCell {
      alloc<R = MSPopUpButtonTextAndRightEdgeImageCell>(): R;
      new: <R = MSPopUpButtonTextAndRightEdgeImageCell>() => R;
    }
  }
}

declare const MSPopUpButtonTextAndRightEdgeImageCell: cocoa.classes.MSPopUpButtonTextAndRightEdgeImageCell;
