/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSZoomPopUpButton<T = any> extends cocoa.NSPopUpButton {}
  namespace classes {
    export interface MSZoomPopUpButton<T = any> extends cocoa.classes.NSPopUpButton {
      alloc<R = MSZoomPopUpButton>(): R;
      new: <R = MSZoomPopUpButton>() => R;
    }
  }
}

declare const MSZoomPopUpButton: cocoa.classes.MSZoomPopUpButton;
