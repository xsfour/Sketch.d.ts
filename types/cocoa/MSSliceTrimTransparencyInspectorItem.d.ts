/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSliceTrimTransparencyInspectorItem<T = any> extends MSInspectorItem {}
  namespace classes {
    export interface MSSliceTrimTransparencyInspectorItem<T = any> extends MSInspectorItem {
      alloc<R = MSSliceTrimTransparencyInspectorItem>(): R;
      new: <R = MSSliceTrimTransparencyInspectorItem>() => R;
    }
  }
}

declare const MSSliceTrimTransparencyInspectorItem: cocoa.classes.MSSliceTrimTransparencyInspectorItem;
