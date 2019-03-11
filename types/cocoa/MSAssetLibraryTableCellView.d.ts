/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetLibraryTableCellView<T = any> extends cocoa.NSTableCellView {
    setPrimaryTextFieldTextColor<R = void, P0 = unknown>(_setPrimaryTextFieldTextColor: P0): R;
    setSecondaryTextFieldTextColor<R = void, P0 = unknown>(_setSecondaryTextFieldTextColor: P0): R;
    downloadLibrary<R = void, P0 = unknown>(_downloadLibrary: P0): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    startDownloadWithEnable<R = void, P0 = boolean>(_startDownloadWithEnable: P0): R;
    startDownloading<R = void>(): R;
    setupButtons<R = void>(): R;
    generatePreviewImage<R = void>(): R;
    setObjectValue<R = void, P0 = unknown>(_setObjectValue: P0): R;
    setBackgroundStyle<R = void, P0 = number>(_setBackgroundStyle: P0): R;
    downloadProgressHidden<R = boolean>(): R;
    setDownloadProgressHidden<R = void, P0 = boolean>(_v: P0): R;
    downloadButtonHidden<R = boolean>(): R;
    setDownloadButtonHidden<R = void, P0 = boolean>(_v: P0): R;
    quickLookButtonHidden<R = boolean>(): R;
    setQuickLookButtonHidden<R = void, P0 = boolean>(_v: P0): R;
    downloadProgress<R = cocoa.NSProgressIndicator>(): R;
    setDownloadProgress<R = void, P0 = cocoa.NSProgressIndicator>(_v: P0): R;
    previewContainer<R = cocoa.MSAssetLibraryPreview>(): R;
    setPreviewContainer<R = void, P0 = cocoa.MSAssetLibraryPreview>(_v: P0): R;
    libraryPreferencePane<R = cocoa.MSAssetLibrariesPreferencePane>(): R;
    setLibraryPreferencePane<R = void, P0 = cocoa.MSAssetLibrariesPreferencePane>(_v: P0): R;
    updateAvailableTextField<R = cocoa.NSTextField>(): R;
    setUpdateAvailableTextField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    updateAvailableSecondaryTextField<R = cocoa.NSTextField>(): R;
    setUpdateAvailableSecondaryTextField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    updateAvailablePrimaryTextField<R = cocoa.NSTextField>(): R;
    setUpdateAvailablePrimaryTextField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    secondaryTextField<R = cocoa.NSTextField>(): R;
    setSecondaryTextField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    primaryTextField<R = cocoa.NSTextField>(): R;
    setPrimaryTextField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    enabled<R = boolean>(): R;
    setEnabled<R = void, P0 = boolean>(_v: P0): R;
    assetPreferenceItem<R = cocoa.MSAssetPreferenceItem>(): R;
  }
  namespace classes {
    export interface MSAssetLibraryTableCellView<T = any> extends cocoa.classes.NSTableCellView {
      alloc<R = MSAssetLibraryTableCellView>(): R;
      new: <R = MSAssetLibraryTableCellView>() => R;
      sketchRemoteLibraryPlaceholderImage<R = unknown>(): R;
      missingLibraryPlaceholderImage<R = unknown>(): R;
      keyPathsForValuesAffectingValueForKey<R = unknown, P0 = unknown>(_keyPathsForValuesAffectingValueForKey: P0): R;
    }
  }
}

declare const MSAssetLibraryTableCellView: cocoa.classes.MSAssetLibraryTableCellView;
