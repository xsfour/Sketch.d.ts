/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSEPSExporter<T = any> extends cocoa.MSExporter {}
  namespace classes {
    export interface MSEPSExporter<T = any> extends cocoa.classes.MSExporter {
      alloc<R = MSEPSExporter>(): R;
      new: <R = MSEPSExporter>() => R;
    }
  }
}

declare const MSEPSExporter: cocoa.classes.MSEPSExporter;
