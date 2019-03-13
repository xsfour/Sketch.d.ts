/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSZoomPopUpButton<T = any> extends NSPopUpButton {}
  namespace classes {
    export interface MSZoomPopUpButton<T = any> extends NSPopUpButton {
      alloc<R = MSZoomPopUpButton>(): R;
      new: <R = MSZoomPopUpButton>() => R;
    }
  }
}

declare const MSZoomPopUpButton: cocoa.classes.MSZoomPopUpButton;
