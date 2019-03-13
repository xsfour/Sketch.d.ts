/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFilterBarView<T = any> extends MSBarView {}
  namespace classes {
    export interface MSFilterBarView<T = any> extends MSBarView {
      alloc<R = MSFilterBarView>(): R;
      new: <R = MSFilterBarView>() => R;
    }
  }
}

declare const MSFilterBarView: cocoa.classes.MSFilterBarView;
