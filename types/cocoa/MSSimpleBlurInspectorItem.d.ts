/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSimpleBlurInspectorItem<T = any> extends cocoa.MSBaseBlurInspectorItem {}
  namespace classes {
    export interface MSSimpleBlurInspectorItem<T = any> extends cocoa.classes.MSBaseBlurInspectorItem {
      alloc<R = MSSimpleBlurInspectorItem>(): R;
      new: <R = MSSimpleBlurInspectorItem>() => R;
    }
  }
}

declare const MSSimpleBlurInspectorItem: cocoa.classes.MSSimpleBlurInspectorItem;
