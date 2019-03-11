/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportPresetFormatViewController<T = any> extends cocoa.MSExportFormatViewController {}
  namespace classes {
    export interface MSExportPresetFormatViewController<T = any> extends cocoa.classes.MSExportFormatViewController {
      alloc<R = MSExportPresetFormatViewController>(): R;
      new: <R = MSExportPresetFormatViewController>() => R;
    }
  }
}

declare const MSExportPresetFormatViewController: cocoa.classes.MSExportPresetFormatViewController;
