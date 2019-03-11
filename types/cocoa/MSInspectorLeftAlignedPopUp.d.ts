/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorLeftAlignedPopUp<T = any> extends cocoa.NSPopUpButton {}
  namespace classes {
    export interface MSInspectorLeftAlignedPopUp<T = any> extends cocoa.classes.NSPopUpButton {
      alloc<R = MSInspectorLeftAlignedPopUp>(): R;
      new: <R = MSInspectorLeftAlignedPopUp>() => R;
    }
  }
}

declare const MSInspectorLeftAlignedPopUp: cocoa.classes.MSInspectorLeftAlignedPopUp;
