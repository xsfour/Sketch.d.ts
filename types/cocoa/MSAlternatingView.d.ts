/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAlternatingView<T = any> extends NSView {
    cxx_destruct<R = void>(): R;
    buttonImage<R = unknown>(): R;
    awakeFromNib<R = void>(): R;
    toggleColorComponentTextFieldFocusIfAppropriate<R = void>(): R;
    shouldSwapColorModeForEvent<R = boolean, P0 = unknown>(_shouldSwapColorModeForEvent: P0): R;
    otherView<R = NSView>(): R;
    setOtherView<R = void, P0 = NSView>(_v: P0): R;
  }
  namespace classes {
    export interface MSAlternatingView<T = any> extends NSView {
      alloc<R = MSAlternatingView>(): R;
      new: <R = MSAlternatingView>() => R;
    }
  }
}

declare const MSAlternatingView: cocoa.classes.MSAlternatingView;
