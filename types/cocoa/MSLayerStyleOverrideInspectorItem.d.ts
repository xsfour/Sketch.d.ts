/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerStyleOverrideInspectorItem<T = any> extends MSStyleOverrideInspectorItem {
    menuObjectProvider<R = unknown>(): R;
  }
  namespace classes {
    export interface MSLayerStyleOverrideInspectorItem<T = any> extends MSStyleOverrideInspectorItem {
      alloc<R = MSLayerStyleOverrideInspectorItem>(): R;
      new: <R = MSLayerStyleOverrideInspectorItem>() => R;
    }
  }
}

declare const MSLayerStyleOverrideInspectorItem: cocoa.classes.MSLayerStyleOverrideInspectorItem;
