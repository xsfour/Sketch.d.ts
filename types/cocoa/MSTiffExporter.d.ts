/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTiffExporter<T = any> extends cocoa.MSExporter {}
  namespace classes {
    export interface MSTiffExporter<T = any> extends cocoa.classes.MSExporter {
      alloc<R = MSTiffExporter>(): R;
      new: <R = MSTiffExporter>() => R;
    }
  }
}

declare const MSTiffExporter: cocoa.classes.MSTiffExporter;
