/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableExportOptions<T = any> extends _MSImmutableExportOptions {
    firstFormat<R = unknown>(): R;
    migratePropertiesFromV72OrEarlierWithUnarchiver<R = void, P0 = unknown>(_migratePropertiesFromV72OrEarlierWithUnarchiver: P0): R;
  }
  namespace classes {
    export interface MSImmutableExportOptions<T = any> extends _MSImmutableExportOptions {
      alloc<R = MSImmutableExportOptions>(): R;
      new: <R = MSImmutableExportOptions>() => R;
    }
  }
}

declare const MSImmutableExportOptions: cocoa.classes.MSImmutableExportOptions;
