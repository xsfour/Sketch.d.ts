/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportOptions<T = any> extends _MSExportOptions, MSExportFormatContainerProtocol {
    firstFormat<R = unknown>(): R;
  }
  namespace classes {
    export interface MSExportOptions<T = any> extends _MSExportOptions, MSExportFormatContainerProtocol {
      alloc<R = MSExportOptions>(): R;
      new: <R = MSExportOptions>() => R;
      nextMostAppropriateExportFormatToAdd<R = unknown, P0 = unknown>(_nextMostAppropriateExportFormatToAdd: P0): R;
    }
  }
}

declare const MSExportOptions: cocoa.classes.MSExportOptions;
