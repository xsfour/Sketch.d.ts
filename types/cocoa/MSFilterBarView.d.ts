/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFilterBarView<T = any> extends cocoa.MSBarView {}
  namespace classes {
    export interface MSFilterBarView<T = any> extends cocoa.classes.MSBarView {
      alloc<R = MSFilterBarView>(): R;
      new: <R = MSFilterBarView>() => R;
    }
  }
}

declare const MSFilterBarView: cocoa.classes.MSFilterBarView;
