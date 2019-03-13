/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorPickerImagePopupButton<T = any> extends NSPopUpButton {}
  namespace classes {
    export interface NSColorPickerImagePopupButton<T = any> extends NSPopUpButton {
      alloc<R = NSColorPickerImagePopupButton>(): R;
      new: <R = NSColorPickerImagePopupButton>() => R;
    }
  }
}

declare const NSColorPickerImagePopupButton: cocoa.classes.NSColorPickerImagePopupButton;
