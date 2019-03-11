/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetPreferenceItem<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    evaluateSecondaryTitle<R = void>(): R;
    updatingRelatedSecondaryTitle<R = unknown>(): R;
    secondaryTitleStringWhenUpdateAvailable<R = unknown>(): R;
    downloadProgress<R = unknown>(): R;
    infoText<R = unknown>(): R;
    valid<R = boolean>(): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    dealloc<R = void>(): R;
    setupObservers<R = void>(): R;
    initWithLibrary<R = unknown, P0 = unknown>(_initWithLibrary: P0): R;
    downloadedSoFar<R = number>(): R;
    setDownloadedSoFar<R = void, P0 = number>(_v: P0): R;
    fileSize<R = number>(): R;
    setFileSize<R = void, P0 = number>(_v: P0): R;
    secondaryTitle<R = cocoa.NSString>(): R;
    setSecondaryTitle<R = void, P0 = cocoa.NSString>(_v: P0): R;
    preview<R = cocoa.NSImage>(): R;
    setPreview<R = void, P0 = cocoa.NSImage>(_v: P0): R;
    library<R = cocoa.MSAssetLibrary>(): R;
    delegate<R = cocoa.MSAssetPreferenceItemDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.MSAssetPreferenceItemDelegate>(_v: P0): R;
    updatingStatus<R = number>(): R;
    setUpdatingStatus<R = void, P0 = number>(_v: P0): R;
    missingRemoteLibraryWithNoInternet<R = boolean>(): R;
    remoteLibrary<R = cocoa.MSRemoteAssetLibrary>(): R;
    modificationDate<R = cocoa.NSString>(): R;
    hasAppcastURL<R = boolean>(): R;
    validForSecondaryTextField<R = boolean>(): R;
    downloadFailed<R = boolean>(): R;
    updateAvailable<R = boolean>(): R;
    enabled<R = boolean>(): R;
    setEnabled<R = void, P0 = boolean>(_v: P0): R;
    name<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface MSAssetPreferenceItem<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSAssetPreferenceItem>(): R;
      new: <R = MSAssetPreferenceItem>() => R;
      keyPathsForValuesAffectingUpdateAvailable<R = unknown>(): R;
      preferenceItemForLibrary<R = unknown, P0 = unknown>(_preferenceItemForLibrary: P0): R;
    }
  }
}

declare const MSAssetPreferenceItem: cocoa.classes.MSAssetPreferenceItem;
