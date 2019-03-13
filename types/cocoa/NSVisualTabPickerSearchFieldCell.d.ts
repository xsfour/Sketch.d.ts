/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVisualTabPickerSearchFieldCell<T = any> extends NSSearchFieldCell {}
  namespace classes {
    export interface NSVisualTabPickerSearchFieldCell<T = any> extends NSSearchFieldCell {
      alloc<R = NSVisualTabPickerSearchFieldCell>(): R;
      new: <R = NSVisualTabPickerSearchFieldCell>() => R;
    }
  }
}

declare const NSVisualTabPickerSearchFieldCell: cocoa.classes.NSVisualTabPickerSearchFieldCell;
