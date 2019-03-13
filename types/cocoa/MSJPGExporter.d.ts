/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSJPGExporter<T = any> extends MSExporter {}
  namespace classes {
    export interface MSJPGExporter<T = any> extends MSExporter {
      alloc<R = MSJPGExporter>(): R;
      new: <R = MSJPGExporter>() => R;
    }
  }
}

declare const MSJPGExporter: cocoa.classes.MSJPGExporter;
