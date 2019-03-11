/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetSyncSheetObject<T = any> extends cocoa.NSObject, cocoa.MSAssetSyncSheetItemProtocol {
    shouldSync<R = boolean>(): R;
    setShouldSync<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface MSAssetSyncSheetObject<T = any> extends cocoa.classes.NSObject, cocoa.classes.MSAssetSyncSheetItemProtocol {
      alloc<R = MSAssetSyncSheetObject>(): R;
      new: <R = MSAssetSyncSheetObject>() => R;
    }
  }
}

declare const MSAssetSyncSheetObject: cocoa.classes.MSAssetSyncSheetObject;
