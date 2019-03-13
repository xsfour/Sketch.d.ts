/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBottomGradientView<T = any> extends NSView {}
  namespace classes {
    export interface MSBottomGradientView<T = any> extends NSView {
      alloc<R = MSBottomGradientView>(): R;
      new: <R = MSBottomGradientView>() => R;
    }
  }
}

declare const MSBottomGradientView: cocoa.classes.MSBottomGradientView;
