/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayoutSheet<T = any> extends cocoa.MSGridSheetBase {
    offsetChanged<R = void, P0 = unknown>(_offsetChanged: P0): R;
    centerGrid<R = void, P0 = unknown>(_centerGrid: P0): R;
    setAsDefault<R = void, P0 = unknown>(_setAsDefault: P0): R;
    centerGridButton<R = cocoa.NSButton>(): R;
    setCenterGridButton<R = void, P0 = cocoa.NSButton>(_v: P0): R;
  }
  namespace classes {
    export interface MSLayoutSheet<T = any> extends cocoa.classes.MSGridSheetBase {
      alloc<R = MSLayoutSheet>(): R;
      new: <R = MSLayoutSheet>() => R;
    }
  }
}

declare const MSLayoutSheet: cocoa.classes.MSLayoutSheet;
