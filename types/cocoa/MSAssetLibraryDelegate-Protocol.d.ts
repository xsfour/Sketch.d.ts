/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetLibraryDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    assetLibraryEnableStateChanged<R = void, P0 = cocoa.MSAssetLibrary>(_assetLibraryEnableStateChanged: P0): R;
    assetLibraryChangedOnDisk<R = void, P0 = cocoa.MSAssetLibrary>(_assetLibraryChangedOnDisk: P0): R;
  }
  namespace classes {
    export interface MSAssetLibraryDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSAssetLibraryDelegateProtocol: cocoa.classes.MSAssetLibraryDelegateProtocol;
