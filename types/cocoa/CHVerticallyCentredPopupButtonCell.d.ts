/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CHVerticallyCentredPopupButtonCell<T = any> extends cocoa.NSPopUpButtonCell {}
  namespace classes {
    export interface CHVerticallyCentredPopupButtonCell<T = any> extends cocoa.classes.NSPopUpButtonCell {
      alloc<R = CHVerticallyCentredPopupButtonCell>(): R;
      new: <R = CHVerticallyCentredPopupButtonCell>() => R;
    }
  }
}

declare const CHVerticallyCentredPopupButtonCell: cocoa.classes.CHVerticallyCentredPopupButtonCell;
