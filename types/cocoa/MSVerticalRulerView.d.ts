/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSVerticalRulerView<T = any> extends cocoa.MSRulerView {
    isFlipped<R = boolean>(): R;
  }
  namespace classes {
    export interface MSVerticalRulerView<T = any> extends cocoa.classes.MSRulerView {
      alloc<R = MSVerticalRulerView>(): R;
      new: <R = MSVerticalRulerView>() => R;
    }
  }
}

declare const MSVerticalRulerView: cocoa.classes.MSVerticalRulerView;
