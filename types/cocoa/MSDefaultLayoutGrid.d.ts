/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDefaultLayoutGrid<T = any> extends cocoa.MSDefaultArchive {
    setting<R = unknown>(): R;
  }
  namespace classes {
    export interface MSDefaultLayoutGrid<T = any> extends cocoa.classes.MSDefaultArchive {
      setDefaultLayout<R = void, P0 = unknown>(_setDefaultLayout: P0): R;
      defaultLayout<R = unknown>(): R;
    }
  }
}

declare const MSDefaultLayoutGrid: cocoa.classes.MSDefaultLayoutGrid;
