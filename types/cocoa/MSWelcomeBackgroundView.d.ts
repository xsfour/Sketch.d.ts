/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWelcomeBackgroundView<T = any> extends NSView {
    mouseDownCanMoveWindow<R = boolean>(): R;
  }
  namespace classes {
    export interface MSWelcomeBackgroundView<T = any> extends NSView {
      alloc<R = MSWelcomeBackgroundView>(): R;
      new: <R = MSWelcomeBackgroundView>() => R;
    }
  }
}

declare const MSWelcomeBackgroundView: cocoa.classes.MSWelcomeBackgroundView;
