/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBitmapLayerItem<T = any> extends MSInspectorItem {}
  namespace classes {
    export interface MSBitmapLayerItem<T = any> extends MSInspectorItem {
      alloc<R = MSBitmapLayerItem>(): R;
      new: <R = MSBitmapLayerItem>() => R;
    }
  }
}

declare const MSBitmapLayerItem: cocoa.classes.MSBitmapLayerItem;
