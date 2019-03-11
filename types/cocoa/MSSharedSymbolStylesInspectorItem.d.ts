/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSharedSymbolStylesInspectorItem<T = any> extends cocoa.MSSharedStylesInspectorItem {}
  namespace classes {
    export interface MSSharedSymbolStylesInspectorItem<T = any> extends cocoa.classes.MSSharedStylesInspectorItem {
      alloc<R = MSSharedSymbolStylesInspectorItem>(): R;
      new: <R = MSSharedSymbolStylesInspectorItem>() => R;
    }
  }
}

declare const MSSharedSymbolStylesInspectorItem: cocoa.classes.MSSharedSymbolStylesInspectorItem;
