/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToolbarPopUpButton<T = any> extends cocoa.NSPopUpButton {}
  namespace classes {
    export interface MSToolbarPopUpButton<T = any> extends cocoa.classes.NSPopUpButton {
      alloc<R = MSToolbarPopUpButton>(): R;
      new: <R = MSToolbarPopUpButton>() => R;
    }
  }
}

declare const MSToolbarPopUpButton: cocoa.classes.MSToolbarPopUpButton;
