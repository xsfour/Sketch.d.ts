/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorPickerSelectingTextField<T = any> extends NSTextField {}
  namespace classes {
    export interface NSColorPickerSelectingTextField<T = any> extends NSTextField {
      alloc<R = NSColorPickerSelectingTextField>(): R;
      new: <R = NSColorPickerSelectingTextField>() => R;
    }
  }
}

declare const NSColorPickerSelectingTextField: cocoa.classes.NSColorPickerSelectingTextField;
