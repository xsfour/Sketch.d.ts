/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBitmapLayerItem<T = any> extends cocoa.MSInspectorItem {}
  namespace classes {
    export interface MSBitmapLayerItem<T = any> extends cocoa.classes.MSInspectorItem {
      alloc<R = MSBitmapLayerItem>(): R;
      new: <R = MSBitmapLayerItem>() => R;
    }
  }
}

declare const MSBitmapLayerItem: cocoa.classes.MSBitmapLayerItem;
