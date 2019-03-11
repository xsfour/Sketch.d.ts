/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSJPGExporter<T = any> extends cocoa.MSExporter {}
  namespace classes {
    export interface MSJPGExporter<T = any> extends cocoa.classes.MSExporter {
      alloc<R = MSJPGExporter>(): R;
      new: <R = MSJPGExporter>() => R;
    }
  }
}

declare const MSJPGExporter: cocoa.classes.MSJPGExporter;
