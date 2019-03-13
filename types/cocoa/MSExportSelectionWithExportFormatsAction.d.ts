/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportSelectionWithExportFormatsAction<T = any> extends MSDocumentAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    exportSelection<R = void, P0 = unknown>(_exportSelection: P0): R;
  }
  namespace classes {
    export interface MSExportSelectionWithExportFormatsAction<T = any> extends MSDocumentAction {
      alloc<R = MSExportSelectionWithExportFormatsAction>(): R;
      new: <R = MSExportSelectionWithExportFormatsAction>() => R;
    }
  }
}

declare const MSExportSelectionWithExportFormatsAction: cocoa.classes.MSExportSelectionWithExportFormatsAction;
