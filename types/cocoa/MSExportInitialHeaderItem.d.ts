/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportInitialHeaderItem<T = any> extends cocoa.MSHeaderInspectorItem {}
  namespace classes {
    export interface MSExportInitialHeaderItem<T = any> extends cocoa.classes.MSHeaderInspectorItem {
      alloc<R = MSExportInitialHeaderItem>(): R;
      new: <R = MSExportInitialHeaderItem>() => R;
    }
  }
}

declare const MSExportInitialHeaderItem: cocoa.classes.MSExportInitialHeaderItem;
