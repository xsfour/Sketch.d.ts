/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetSyncItemTableCellView<T = any> extends cocoa.NSTableCellView {
    setBackgroundStyle<R = void, P0 = number>(_setBackgroundStyle: P0): R;
  }
  namespace classes {
    export interface MSAssetSyncItemTableCellView<T = any> extends cocoa.classes.NSTableCellView {
      alloc<R = MSAssetSyncItemTableCellView>(): R;
      new: <R = MSAssetSyncItemTableCellView>() => R;
    }
  }
}

declare const MSAssetSyncItemTableCellView: cocoa.classes.MSAssetSyncItemTableCellView;
