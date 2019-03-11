/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAddRemoteLibraryAction<T = any> extends cocoa.MSAction {
    label<R = unknown>(): R;
    displayDuplicateAlertSheetForRemoteAssetLibrary<R = void, P0 = unknown>(_displayDuplicateAlertSheetForRemoteAssetLibrary: P0): R;
    startDownloadingLibrary<R = void, P0 = unknown>(_startDownloadingLibrary: P0): R;
    addAppcastURL<R = void, P0 = unknown>(_addAppcastURL: P0): R;
  }
  namespace classes {
    export interface MSAddRemoteLibraryAction<T = any> extends cocoa.classes.MSAction {
      alloc<R = MSAddRemoteLibraryAction>(): R;
      new: <R = MSAddRemoteLibraryAction>() => R;
    }
  }
}

declare const MSAddRemoteLibraryAction: cocoa.classes.MSAddRemoteLibraryAction;
