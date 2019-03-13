/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSIncludeBackgroundColorInExportInspectorItem<T = any> extends MSInspectorItem {}
  namespace classes {
    export interface MSIncludeBackgroundColorInExportInspectorItem<T = any> extends MSInspectorItem {
      alloc<R = MSIncludeBackgroundColorInExportInspectorItem>(): R;
      new: <R = MSIncludeBackgroundColorInExportInspectorItem>() => R;
    }
  }
}

declare const MSIncludeBackgroundColorInExportInspectorItem: cocoa.classes.MSIncludeBackgroundColorInExportInspectorItem;
