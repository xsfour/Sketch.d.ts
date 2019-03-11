/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSUserAssetLibrary<T = any> extends cocoa.MSAssetLibrary {
    startMonitoring<R = void>(): R;
    setEnabled<R = void, P0 = boolean>(_setEnabled: P0): R;
    libraryType<R = number>(): R;
    fileMonitor<R = cocoa.MSFileMonitor>(): R;
    setFileMonitor<R = void, P0 = cocoa.MSFileMonitor>(_v: P0): R;
  }
  namespace classes {
    export interface MSUserAssetLibrary<T = any> extends cocoa.classes.MSAssetLibrary {
      alloc<R = MSUserAssetLibrary>(): R;
      new: <R = MSUserAssetLibrary>() => R;
    }
  }
}

declare const MSUserAssetLibrary: cocoa.classes.MSUserAssetLibrary;
