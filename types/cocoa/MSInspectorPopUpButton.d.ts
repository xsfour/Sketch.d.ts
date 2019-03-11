/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorPopUpButton<T = any> extends cocoa.NSPopUpButton {}
  namespace classes {
    export interface MSInspectorPopUpButton<T = any> extends cocoa.classes.NSPopUpButton {
      alloc<R = MSInspectorPopUpButton>(): R;
      new: <R = MSInspectorPopUpButton>() => R;
    }
  }
}

declare const MSInspectorPopUpButton: cocoa.classes.MSInspectorPopUpButton;
