/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSliceTrimTransparencyInspectorItem<T = any> extends cocoa.MSInspectorItem {}
  namespace classes {
    export interface MSSliceTrimTransparencyInspectorItem<T = any> extends cocoa.classes.MSInspectorItem {
      alloc<R = MSSliceTrimTransparencyInspectorItem>(): R;
      new: <R = MSSliceTrimTransparencyInspectorItem>() => R;
    }
  }
}

declare const MSSliceTrimTransparencyInspectorItem: cocoa.classes.MSSliceTrimTransparencyInspectorItem;
