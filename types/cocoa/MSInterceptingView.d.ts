/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInterceptingView<T = any> extends cocoa.NSView {}
  namespace classes {
    export interface MSInterceptingView<T = any> extends cocoa.classes.NSView {
      alloc<R = MSInterceptingView>(): R;
      new: <R = MSInterceptingView>() => R;
    }
  }
}

declare const MSInterceptingView: cocoa.classes.MSInterceptingView;
