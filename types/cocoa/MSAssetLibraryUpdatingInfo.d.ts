/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetLibraryUpdatingInfo<T = any> extends cocoa.NSObject, cocoa.NSCodingProtocol {
    cxx_destruct<R = void>(): R;
    isHigherVersionThan<R = boolean, P0 = unknown>(_isHigherVersionThan: P0): R;
    isEqualToAssetLibraryUpdatingInfo<R = boolean, P0 = unknown>(_isEqualToAssetLibraryUpdatingInfo: P0): R;
    initWithDownloadURL_libraryName_imageURL_newVersionNumber_shareLink_downloadSize<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown, P5 = number>(_initWithDownloadURL: P0, _libraryName: P1, _imageURL: P2, _newVersionNumber: P3, _shareLink: P4, _downloadSize: P5): R;
    shareLink<R = cocoa.NSURL>(): R;
    downloadTaskIdentifier<R = cocoa.NSString>(): R;
    setDownloadTaskIdentifier<R = void, P0 = cocoa.NSString>(_v: P0): R;
    folderMonitor<R = cocoa.MSFolderMonitor>(): R;
    setFolderMonitor<R = void, P0 = cocoa.MSFolderMonitor>(_v: P0): R;
    imageURL<R = cocoa.NSURL>(): R;
    libraryName<R = cocoa.NSString>(): R;
    downloadSize<R = number>(): R;
    versionNumberForUpdate<R = cocoa.NSString>(): R;
    downloadURL<R = cocoa.NSURL>(): R;
  }
  namespace classes {
    export interface MSAssetLibraryUpdatingInfo<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCodingProtocol {
      alloc<R = MSAssetLibraryUpdatingInfo>(): R;
      new: <R = MSAssetLibraryUpdatingInfo>() => R;
    }
  }
}

declare const MSAssetLibraryUpdatingInfo: cocoa.classes.MSAssetLibraryUpdatingInfo;
