/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportInitialHeaderItem<T = any> extends MSHeaderInspectorItem {}
  namespace classes {
    export interface MSExportInitialHeaderItem<T = any> extends MSHeaderInspectorItem {
      alloc<R = MSExportInitialHeaderItem>(): R;
      new: <R = MSExportInitialHeaderItem>() => R;
    }
  }
}

declare const MSExportInitialHeaderItem: cocoa.classes.MSExportInitialHeaderItem;
