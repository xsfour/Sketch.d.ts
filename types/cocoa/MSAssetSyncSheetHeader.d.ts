/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetSyncSheetHeader<T = any> extends cocoa.NSObject, cocoa.MSAssetSyncSheetItemProtocol {
    cxx_destruct<R = void>(): R;
    library<R = cocoa.MSAssetLibrary>(): R;
    setLibrary<R = void, P0 = cocoa.MSAssetLibrary>(_v: P0): R;
    shouldSync<R = boolean>(): R;
    modifiedDateString<R = cocoa.NSString>(): R;
    displayName<R = cocoa.NSString>(): R;
    type<R = number>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSAssetSyncSheetHeader<T = any> extends cocoa.classes.NSObject, cocoa.classes.MSAssetSyncSheetItemProtocol {
      alloc<R = MSAssetSyncSheetHeader>(): R;
      new: <R = MSAssetSyncSheetHeader>() => R;
    }
  }
}

declare const MSAssetSyncSheetHeader: cocoa.classes.MSAssetSyncSheetHeader;
