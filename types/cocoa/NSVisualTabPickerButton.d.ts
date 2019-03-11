/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVisualTabPickerButton<T = any> extends cocoa.NSButton {
    useExternalHitTesting<R = boolean>(): R;
    setUseExternalHitTesting<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface NSVisualTabPickerButton<T = any> extends cocoa.classes.NSButton {
      alloc<R = NSVisualTabPickerButton>(): R;
      new: <R = NSVisualTabPickerButton>() => R;
    }
  }
}

declare const NSVisualTabPickerButton: cocoa.classes.NSVisualTabPickerButton;
