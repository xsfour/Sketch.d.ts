/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFileMonitor<T = any> extends MSFolderMonitor {}
  namespace classes {
    export interface MSFileMonitor<T = any> extends MSFolderMonitor {
      alloc<R = MSFileMonitor>(): R;
      new: <R = MSFileMonitor>() => R;
    }
  }
}

declare const MSFileMonitor: cocoa.classes.MSFileMonitor;
