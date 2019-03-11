/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDataSupplierFileSystemMonitor<T = any> extends cocoa.MSFolderMonitor {}
  namespace classes {
    export interface MSDataSupplierFileSystemMonitor<T = any> extends cocoa.classes.MSFolderMonitor {
      alloc<R = MSDataSupplierFileSystemMonitor>(): R;
      new: <R = MSDataSupplierFileSystemMonitor>() => R;
    }
  }
}

declare const MSDataSupplierFileSystemMonitor: cocoa.classes.MSDataSupplierFileSystemMonitor;
