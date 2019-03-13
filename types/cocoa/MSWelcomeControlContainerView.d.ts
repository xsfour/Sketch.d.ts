/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWelcomeControlContainerView<T = any> extends NSView {
    mouseDownCanMoveWindow<R = boolean>(): R;
  }
  namespace classes {
    export interface MSWelcomeControlContainerView<T = any> extends NSView {
      alloc<R = MSWelcomeControlContainerView>(): R;
      new: <R = MSWelcomeControlContainerView>() => R;
    }
  }
}

declare const MSWelcomeControlContainerView: cocoa.classes.MSWelcomeControlContainerView;
