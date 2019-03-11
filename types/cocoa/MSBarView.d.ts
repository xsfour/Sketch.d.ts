/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBarView<T = any> extends cocoa.MSGradientView {}
  namespace classes {
    export interface MSBarView<T = any> extends cocoa.classes.MSGradientView {
      alloc<R = MSBarView>(): R;
      new: <R = MSBarView>() => R;
    }
  }
}

declare const MSBarView: cocoa.classes.MSBarView;
