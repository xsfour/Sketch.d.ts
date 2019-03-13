/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableExportPreset<T = any> extends _MSImmutableExportPreset {}
  namespace classes {
    export interface MSImmutableExportPreset<T = any> extends _MSImmutableExportPreset {
      alloc<R = MSImmutableExportPreset>(): R;
      new: <R = MSImmutableExportPreset>() => R;
    }
  }
}

declare const MSImmutableExportPreset: cocoa.classes.MSImmutableExportPreset;
