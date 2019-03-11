/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetLibraryTableView<T = any> extends cocoa.BCKeyEventActionTableView {}
  namespace classes {
    export interface MSAssetLibraryTableView<T = any> extends cocoa.classes.BCKeyEventActionTableView {
      alloc<R = MSAssetLibraryTableView>(): R;
      new: <R = MSAssetLibraryTableView>() => R;
    }
  }
}

declare const MSAssetLibraryTableView: cocoa.classes.MSAssetLibraryTableView;
