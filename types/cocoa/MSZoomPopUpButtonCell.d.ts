/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSZoomPopUpButtonCell<T = any> extends NSPopUpButtonCell {}
  namespace classes {
    export interface MSZoomPopUpButtonCell<T = any> extends NSPopUpButtonCell {
      alloc<R = MSZoomPopUpButtonCell>(): R;
      new: <R = MSZoomPopUpButtonCell>() => R;
    }
  }
}

declare const MSZoomPopUpButtonCell: cocoa.classes.MSZoomPopUpButtonCell;
