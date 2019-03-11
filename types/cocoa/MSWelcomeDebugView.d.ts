/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWelcomeDebugView<T = any> extends cocoa.NSView {}
  namespace classes {
    export interface MSWelcomeDebugView<T = any> extends cocoa.classes.NSView {
      alloc<R = MSWelcomeDebugView>(): R;
      new: <R = MSWelcomeDebugView>() => R;
    }
  }
}

declare const MSWelcomeDebugView: cocoa.classes.MSWelcomeDebugView;
