/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWelcomeDebugView<T = any> extends NSView {}
  namespace classes {
    export interface MSWelcomeDebugView<T = any> extends NSView {
      alloc<R = MSWelcomeDebugView>(): R;
      new: <R = MSWelcomeDebugView>() => R;
    }
  }
}

declare const MSWelcomeDebugView: cocoa.classes.MSWelcomeDebugView;
