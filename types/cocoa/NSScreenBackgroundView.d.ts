/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScreenBackgroundView<T = any> extends NSView {
    wantsUpdateLayer<R = boolean>(): R;
    _createUnderDesktopCUIOptionsDictionary<R = __CFDictionary>(): R;
    isOpaque<R = boolean>(): R;
  }
  namespace classes {
    export interface NSScreenBackgroundView<T = any> extends NSView {
      alloc<R = NSScreenBackgroundView>(): R;
      new: <R = NSScreenBackgroundView>() => R;
    }
  }
}

declare const NSScreenBackgroundView: cocoa.classes.NSScreenBackgroundView;
