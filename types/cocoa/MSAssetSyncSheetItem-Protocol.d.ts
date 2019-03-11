/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetSyncSheetItemProtocol<T = any> extends cocoa.NSObjectProtocol {
    shouldSync<R = boolean>(): R;
    displayName<R = cocoa.NSString>(): R;
    library<R = cocoa.MSAssetLibrary>(): R;
    setLibrary<R = void, P0 = cocoa.MSAssetLibrary>(_v: P0): R;
    type<R = number>(): R;
  }
  namespace classes {
    export interface MSAssetSyncSheetItemProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSAssetSyncSheetItemProtocol: cocoa.classes.MSAssetSyncSheetItemProtocol;
