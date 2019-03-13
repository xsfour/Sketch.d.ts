/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorVerticallyCentredPopupButtonCell<T = any> extends MSInspectorPopUpButtonCell {}
  namespace classes {
    export interface MSInspectorVerticallyCentredPopupButtonCell<T = any> extends MSInspectorPopUpButtonCell {
      alloc<R = MSInspectorVerticallyCentredPopupButtonCell>(): R;
      new: <R = MSInspectorVerticallyCentredPopupButtonCell>() => R;
    }
  }
}

declare const MSInspectorVerticallyCentredPopupButtonCell: cocoa.classes.MSInspectorVerticallyCentredPopupButtonCell;
