/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorBackgroundView<T = any> extends MSThemedColorView {}
  namespace classes {
    export interface MSInspectorBackgroundView<T = any> extends MSThemedColorView {
      alloc<R = MSInspectorBackgroundView>(): R;
      new: <R = MSInspectorBackgroundView>() => R;
    }
  }
}

declare const MSInspectorBackgroundView: cocoa.classes.MSInspectorBackgroundView;
