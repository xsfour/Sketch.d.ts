/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSHeaderView<T = any> extends NSView {}
  namespace classes {
    export interface MSHeaderView<T = any> extends NSView {
      alloc<R = MSHeaderView>(): R;
      new: <R = MSHeaderView>() => R;
    }
  }
}

declare const MSHeaderView: cocoa.classes.MSHeaderView;
