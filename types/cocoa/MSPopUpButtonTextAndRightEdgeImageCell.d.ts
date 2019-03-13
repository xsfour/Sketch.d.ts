/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPopUpButtonTextAndRightEdgeImageCell<T = any> extends NSPopUpButtonCell {
    cxx_destruct<R = void>(): R;
    rightEdgeImage<R = NSImage>(): R;
    setRightEdgeImage<R = void, P0 = NSImage>(_v: P0): R;
  }
  namespace classes {
    export interface MSPopUpButtonTextAndRightEdgeImageCell<T = any> extends NSPopUpButtonCell {
      alloc<R = MSPopUpButtonTextAndRightEdgeImageCell>(): R;
      new: <R = MSPopUpButtonTextAndRightEdgeImageCell>() => R;
    }
  }
}

declare const MSPopUpButtonTextAndRightEdgeImageCell: cocoa.classes.MSPopUpButtonTextAndRightEdgeImageCell;
