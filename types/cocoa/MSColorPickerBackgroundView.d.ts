/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorPickerBackgroundView<T = any> extends cocoa.NSView {
    subViewsForResponderFixer<R = unknown>(): R;
  }
  namespace classes {
    export interface MSColorPickerBackgroundView<T = any> extends cocoa.classes.NSView {
      alloc<R = MSColorPickerBackgroundView>(): R;
      new: <R = MSColorPickerBackgroundView>() => R;
    }
  }
}

declare const MSColorPickerBackgroundView: cocoa.classes.MSColorPickerBackgroundView;
