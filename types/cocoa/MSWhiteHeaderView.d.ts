/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWhiteHeaderView<T = any> extends cocoa.NSView {}
  namespace classes {
    export interface MSWhiteHeaderView<T = any> extends cocoa.classes.NSView {
      alloc<R = MSWhiteHeaderView>(): R;
      new: <R = MSWhiteHeaderView>() => R;
    }
  }
}

declare const MSWhiteHeaderView: cocoa.classes.MSWhiteHeaderView;
