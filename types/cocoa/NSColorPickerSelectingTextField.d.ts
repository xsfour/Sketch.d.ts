/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorPickerSelectingTextField<T = any> extends cocoa.NSTextField {}
  namespace classes {
    export interface NSColorPickerSelectingTextField<T = any> extends cocoa.classes.NSTextField {
      alloc<R = NSColorPickerSelectingTextField>(): R;
      new: <R = NSColorPickerSelectingTextField>() => R;
    }
  }
}

declare const NSColorPickerSelectingTextField: cocoa.classes.NSColorPickerSelectingTextField;
