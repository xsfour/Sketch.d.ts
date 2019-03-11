/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportPDFBookAction<T = any> extends cocoa.MSDocumentAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    exportPDFBook<R = void, P0 = unknown>(_exportPDFBook: P0): R;
  }
  namespace classes {
    export interface MSExportPDFBookAction<T = any> extends cocoa.classes.MSDocumentAction {
      alloc<R = MSExportPDFBookAction>(): R;
      new: <R = MSExportPDFBookAction>() => R;
    }
  }
}

declare const MSExportPDFBookAction: cocoa.classes.MSExportPDFBookAction;
