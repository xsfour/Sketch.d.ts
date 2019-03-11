/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportOptions<T = any> extends cocoa._MSExportOptions, cocoa.MSExportFormatContainerProtocol {
    firstFormat<R = unknown>(): R;
  }
  namespace classes {
    export interface MSExportOptions<T = any> extends cocoa.classes._MSExportOptions, cocoa.classes.MSExportFormatContainerProtocol {
      alloc<R = MSExportOptions>(): R;
      new: <R = MSExportOptions>() => R;
      nextMostAppropriateExportFormatToAdd<R = unknown, P0 = unknown>(_nextMostAppropriateExportFormatToAdd: P0): R;
    }
  }
}

declare const MSExportOptions: cocoa.classes.MSExportOptions;
