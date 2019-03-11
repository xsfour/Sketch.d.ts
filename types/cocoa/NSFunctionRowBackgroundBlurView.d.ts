/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFunctionRowBackgroundBlurView<T = any> extends cocoa.NSView {
    setLayer<R = void, P0 = unknown>(_setLayer: P0): R;
    blurRadius<R = number>(): R;
    setBlurRadius<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface NSFunctionRowBackgroundBlurView<T = any> extends cocoa.classes.NSView {
      alloc<R = NSFunctionRowBackgroundBlurView>(): R;
      new: <R = NSFunctionRowBackgroundBlurView>() => R;
    }
  }
}

declare const NSFunctionRowBackgroundBlurView: cocoa.classes.NSFunctionRowBackgroundBlurView;
