/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArtboardContentResizeInspectorItem<T = any> extends MSInspectorItem {}
  namespace classes {
    export interface MSArtboardContentResizeInspectorItem<T = any> extends MSInspectorItem {
      alloc<R = MSArtboardContentResizeInspectorItem>(): R;
      new: <R = MSArtboardContentResizeInspectorItem>() => R;
    }
  }
}

declare const MSArtboardContentResizeInspectorItem: cocoa.classes.MSArtboardContentResizeInspectorItem;
