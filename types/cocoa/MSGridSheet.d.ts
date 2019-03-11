/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSGridSheet<T = any> extends cocoa.MSGridSheetBase {
    setAsDefault<R = void, P0 = unknown>(_setAsDefault: P0): R;
  }
  namespace classes {
    export interface MSGridSheet<T = any> extends cocoa.classes.MSGridSheetBase {
      alloc<R = MSGridSheet>(): R;
      new: <R = MSGridSheet>() => R;
    }
  }
}

declare const MSGridSheet: cocoa.classes.MSGridSheet;
