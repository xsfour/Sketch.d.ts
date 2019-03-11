/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportPreviewHeaderInspectorItem<T = any> extends cocoa.MSInspectorItem {
    configurableView<R = unknown>(): R;
    hideSeparator<R = boolean>(): R;
    setHideSeparator<R = void, P0 = boolean>(_v: P0): R;
    collapsed<R = boolean>(): R;
    setCollapsed<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface MSExportPreviewHeaderInspectorItem<T = any> extends cocoa.classes.MSInspectorItem {
      alloc<R = MSExportPreviewHeaderInspectorItem>(): R;
      new: <R = MSExportPreviewHeaderInspectorItem>() => R;
    }
  }
}

declare const MSExportPreviewHeaderInspectorItem: cocoa.classes.MSExportPreviewHeaderInspectorItem;
