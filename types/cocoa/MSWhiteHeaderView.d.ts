/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWhiteHeaderView<T = any> extends NSView {}
  namespace classes {
    export interface MSWhiteHeaderView<T = any> extends NSView {
      alloc<R = MSWhiteHeaderView>(): R;
      new: <R = MSWhiteHeaderView>() => R;
    }
  }
}

declare const MSWhiteHeaderView: cocoa.classes.MSWhiteHeaderView;
