/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVisualTabPickerToolbarButton<T = any> extends cocoa.NSRolloverButton {}
  namespace classes {
    export interface NSVisualTabPickerToolbarButton<T = any> extends cocoa.classes.NSRolloverButton {
      alloc<R = NSVisualTabPickerToolbarButton>(): R;
      new: <R = NSVisualTabPickerToolbarButton>() => R;
    }
  }
}

declare const NSVisualTabPickerToolbarButton: cocoa.classes.NSVisualTabPickerToolbarButton;
