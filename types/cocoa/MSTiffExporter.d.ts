/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTiffExporter<T = any> extends MSExporter {}
  namespace classes {
    export interface MSTiffExporter<T = any> extends MSExporter {
      alloc<R = MSTiffExporter>(): R;
      new: <R = MSTiffExporter>() => R;
    }
  }
}

declare const MSTiffExporter: cocoa.classes.MSTiffExporter;
