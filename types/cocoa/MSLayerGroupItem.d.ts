/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerGroupItem<T = any> extends cocoa.MSInspectorItem {
    views<R = unknown>(): R;
  }
  namespace classes {
    export interface MSLayerGroupItem<T = any> extends cocoa.classes.MSInspectorItem {
      alloc<R = MSLayerGroupItem>(): R;
      new: <R = MSLayerGroupItem>() => R;
    }
  }
}

declare const MSLayerGroupItem: cocoa.classes.MSLayerGroupItem;
