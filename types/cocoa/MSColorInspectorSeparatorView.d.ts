/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorInspectorSeparatorView<T = any> extends MSSectionBackgroundSeparatorView {}
  namespace classes {
    export interface MSColorInspectorSeparatorView<T = any> extends MSSectionBackgroundSeparatorView {
      alloc<R = MSColorInspectorSeparatorView>(): R;
      new: <R = MSColorInspectorSeparatorView>() => R;
    }
  }
}

declare const MSColorInspectorSeparatorView: cocoa.classes.MSColorInspectorSeparatorView;
