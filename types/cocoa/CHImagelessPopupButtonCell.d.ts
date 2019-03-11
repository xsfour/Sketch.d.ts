/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CHImagelessPopupButtonCell<T = any> extends cocoa.NSPopUpButtonCell {}
  namespace classes {
    export interface CHImagelessPopupButtonCell<T = any> extends cocoa.classes.NSPopUpButtonCell {
      alloc<R = CHImagelessPopupButtonCell>(): R;
      new: <R = CHImagelessPopupButtonCell>() => R;
    }
  }
}

declare const CHImagelessPopupButtonCell: cocoa.classes.CHImagelessPopupButtonCell;
