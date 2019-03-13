/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDefaultStyle<T = any> extends MSDefaultArchive {}
  namespace classes {
    export interface MSDefaultStyle<T = any> extends MSDefaultArchive {
      saveStyleAndPatterns<R = void>(): R;
      loadStyleAndPatterns<R = void>(): R;
      setDefaultStyle<R = void, P0 = unknown>(_setDefaultStyle: P0): R;
      defaultStyle<R = unknown>(): R;
      resetCachedStyleForTesting<R = void>(): R;
    }
  }
}

declare const MSDefaultStyle: cocoa.classes.MSDefaultStyle;
