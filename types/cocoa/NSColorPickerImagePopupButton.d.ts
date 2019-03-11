/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorPickerImagePopupButton<T = any> extends cocoa.NSPopUpButton {}
  namespace classes {
    export interface NSColorPickerImagePopupButton<T = any> extends cocoa.classes.NSPopUpButton {
      alloc<R = NSColorPickerImagePopupButton>(): R;
      new: <R = NSColorPickerImagePopupButton>() => R;
    }
  }
}

declare const NSColorPickerImagePopupButton: cocoa.classes.NSColorPickerImagePopupButton;
