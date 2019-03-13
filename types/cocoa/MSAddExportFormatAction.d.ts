/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAddExportFormatAction<T = any> extends MSDocumentAction {
    validate<R = boolean>(): R;
    addExportFormatToLayer<R = void, P0 = unknown>(_addExportFormatToLayer: P0): R;
    label<R = unknown>(): R;
    hasDynamicTitle<R = boolean>(): R;
    addExportFormat<R = void, P0 = unknown>(_addExportFormat: P0): R;
  }
  namespace classes {
    export interface MSAddExportFormatAction<T = any> extends MSDocumentAction {
      alloc<R = MSAddExportFormatAction>(): R;
      new: <R = MSAddExportFormatAction>() => R;
    }
  }
}

declare const MSAddExportFormatAction: cocoa.classes.MSAddExportFormatAction;
