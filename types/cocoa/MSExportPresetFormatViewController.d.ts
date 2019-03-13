/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportPresetFormatViewController<T = any> extends MSExportFormatViewController {}
  namespace classes {
    export interface MSExportPresetFormatViewController<T = any> extends MSExportFormatViewController {
      alloc<R = MSExportPresetFormatViewController>(): R;
      new: <R = MSExportPresetFormatViewController>() => R;
    }
  }
}

declare const MSExportPresetFormatViewController: cocoa.classes.MSExportPresetFormatViewController;
