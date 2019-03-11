/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorBackgroundView<T = any> extends cocoa.MSThemedColorView {}
  namespace classes {
    export interface MSInspectorBackgroundView<T = any> extends cocoa.classes.MSThemedColorView {
      alloc<R = MSInspectorBackgroundView>(): R;
      new: <R = MSInspectorBackgroundView>() => R;
    }
  }
}

declare const MSInspectorBackgroundView: cocoa.classes.MSInspectorBackgroundView;
