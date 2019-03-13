/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetSyncSheetItemProtocol<T = any> extends NSObjectProtocol {
    shouldSync<R = boolean>(): R;
    displayName<R = NSString>(): R;
    library<R = MSAssetLibrary>(): R;
    setLibrary<R = void, P0 = MSAssetLibrary>(_v: P0): R;
    type<R = number>(): R;
  }
  namespace classes {
    export interface MSAssetSyncSheetItemProtocol<T = any> extends NSObjectProtocol {  }
  }
}
