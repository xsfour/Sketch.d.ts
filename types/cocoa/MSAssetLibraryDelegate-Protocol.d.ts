/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetLibraryDelegateProtocol<T = any> extends NSObjectProtocol {
    assetLibraryEnableStateChanged<R = void, P0 = MSAssetLibrary>(_assetLibraryEnableStateChanged: P0): R;
    assetLibraryChangedOnDisk<R = void, P0 = MSAssetLibrary>(_assetLibraryChangedOnDisk: P0): R;
  }
  namespace classes {
    export interface MSAssetLibraryDelegateProtocol<T = any> extends NSObjectProtocol {  }
  }
}
