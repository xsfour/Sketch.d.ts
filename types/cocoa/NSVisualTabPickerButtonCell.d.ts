/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVisualTabPickerButtonCell<T = any> extends NSButtonCell {
    useExternalHitTesting<R = boolean>(): R;
    setUseExternalHitTesting<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface NSVisualTabPickerButtonCell<T = any> extends NSButtonCell {
      alloc<R = NSVisualTabPickerButtonCell>(): R;
      new: <R = NSVisualTabPickerButtonCell>() => R;
    }
  }
}

declare const NSVisualTabPickerButtonCell: cocoa.classes.NSVisualTabPickerButtonCell;
