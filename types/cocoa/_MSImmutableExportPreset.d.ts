/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableExportPreset<T = any> extends MSImmutableModelObject {
    hasDefaultValues<R = boolean>(): R;
    exportFormats<R = NSArray>(): R;
    setExportFormats<R = void, P0 = NSArray>(_v: P0): R;
    shouldApplyAutomatically<R = boolean>(): R;
    setShouldApplyAutomatically<R = void, P0 = boolean>(_v: P0): R;
    name<R = NSString>(): R;
    setName<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace classes {
    export interface _MSImmutableExportPreset<T = any> extends MSImmutableModelObject {
      alloc<R = _MSImmutableExportPreset>(): R;
      new: <R = _MSImmutableExportPreset>() => R;
    }
  }
}
