/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRemoteAssetLibrary<T = any> extends cocoa.MSAssetLibrary {
    assetLibraryUpdated<R = void>(): R;
    name<R = unknown>(): R;
    previewURL<R = unknown>(): R;
    libraryType<R = number>(): R;
    initWithName_appcastURL_version_infoText<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_initWithName: P0, _appcastURL: P1, _version: P2, _infoText: P3): R;
    displayName<R = cocoa.NSString>(): R;
    setDisplayName<R = void, P0 = cocoa.NSString>(_v: P0): R;
    updatingInfo<R = cocoa.MSAssetLibraryUpdatingInfo>(): R;
    setUpdatingInfo<R = void, P0 = cocoa.MSAssetLibraryUpdatingInfo>(_v: P0): R;
    newUpdatingInfo<R = boolean>(): R;
    setNewUpdatingInfo<R = void, P0 = boolean>(_v: P0): R;
    infoText<R = cocoa.NSString>(): R;
    setInfoText<R = void, P0 = cocoa.NSString>(_v: P0): R;
    originalName<R = cocoa.NSString>(): R;
    setOriginalName<R = void, P0 = cocoa.NSString>(_v: P0): R;
    libraryVersion<R = cocoa.NSString>(): R;
    setLibraryVersion<R = void, P0 = cocoa.NSString>(_v: P0): R;
    appcastURL<R = cocoa.NSURL>(): R;
    setAppcastURL<R = void, P0 = cocoa.NSURL>(_v: P0): R;
    fileName<R = cocoa.NSString>(): R;
    downloadAvailable<R = boolean>(): R;
    updateAvailable<R = boolean>(): R;
  }
  namespace classes {
    export interface MSRemoteAssetLibrary<T = any> extends cocoa.classes.MSAssetLibrary {
      alloc<R = MSRemoteAssetLibrary>(): R;
      new: <R = MSRemoteAssetLibrary>() => R;
      URLForApplicationSupportLibraryNamed<R = unknown, P0 = unknown>(_URLForApplicationSupportLibraryNamed: P0): R;
      assetLibraryFolder<R = unknown>(): R;
    }
  }
}

declare const MSRemoteAssetLibrary: cocoa.classes.MSRemoteAssetLibrary;
