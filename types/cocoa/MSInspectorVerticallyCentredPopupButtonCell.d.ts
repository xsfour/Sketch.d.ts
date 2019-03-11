/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorVerticallyCentredPopupButtonCell<T = any> extends cocoa.MSInspectorPopUpButtonCell {}
  namespace classes {
    export interface MSInspectorVerticallyCentredPopupButtonCell<T = any> extends cocoa.classes.MSInspectorPopUpButtonCell {
      alloc<R = MSInspectorVerticallyCentredPopupButtonCell>(): R;
      new: <R = MSInspectorVerticallyCentredPopupButtonCell>() => R;
    }
  }
}

declare const MSInspectorVerticallyCentredPopupButtonCell: cocoa.classes.MSInspectorVerticallyCentredPopupButtonCell;
