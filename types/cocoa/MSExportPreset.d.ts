/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportPreset<T = any> extends _MSExportPreset, MSExportFormatContainerProtocol {
    isAssetEqual<R = boolean, P0 = unknown>(_isAssetEqual: P0): R;
    assetType<R = number>(): R;
    initWithName_formats<R = unknown, P0 = unknown, P1 = unknown>(_initWithName: P0, _formats: P1): R;
    shouldAutoApply<R = boolean>(): R;
    setShouldAutoApply<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface MSExportPreset<T = any> extends _MSExportPreset, MSExportFormatContainerProtocol {
      alloc<R = MSExportPreset>(): R;
      new: <R = MSExportPreset>() => R;
      ensureDefaultExportPresetIsSet<R = void>(): R;
      allExportPresets<R = unknown>(): R;
    }
  }
}

declare const MSExportPreset: cocoa.classes.MSExportPreset;
