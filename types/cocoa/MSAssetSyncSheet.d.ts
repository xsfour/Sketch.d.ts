/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetSyncSheet<T = any> extends cocoa.CHSheetController, cocoa.NSTableViewDataSourceProtocol, cocoa.NSTableViewDelegateProtocol, cocoa.NSSplitViewDelegateProtocol {
    updateSelectedForSync<R = void, P0 = unknown>(_updateSelectedForSync: P0): R;
    updateSymbols<R = void, P0 = unknown>(_updateSymbols: P0): R;
    compareSyncSheetItem_toItem<R = number, P0 = unknown, P1 = unknown>(_compareSyncSheetItem: P0, _toItem: P1): R;
    buildTableViewData<R = void>(): R;
    hasSyncableItems<R = boolean>(): R;
    setHasSyncableItems<R = void, P0 = boolean>(_v: P0): R;
    splitView<R = cocoa.NSSplitView>(): R;
    setSplitView<R = void, P0 = cocoa.NSSplitView>(_v: P0): R;
    updatedSharedObjectView<R = cocoa.MSSharedObjectView>(): R;
    setUpdatedSharedObjectView<R = void, P0 = cocoa.MSSharedObjectView>(_v: P0): R;
    currentSharedObjectView<R = cocoa.MSSharedObjectView>(): R;
    setCurrentSharedObjectView<R = void, P0 = cocoa.MSSharedObjectView>(_v: P0): R;
    tableViewData<R = cocoa.NSArray>(): R;
    document<R = cocoa.MSDocument>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSAssetSyncSheet<T = any> extends cocoa.classes.CHSheetController, cocoa.classes.NSTableViewDataSourceProtocol, cocoa.classes.NSTableViewDelegateProtocol, cocoa.classes.NSSplitViewDelegateProtocol {
      alloc<R = MSAssetSyncSheet>(): R;
      new: <R = MSAssetSyncSheet>() => R;
    }
  }
}

declare const MSAssetSyncSheet: cocoa.classes.MSAssetSyncSheet;
