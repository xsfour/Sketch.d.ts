/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSClosePathChange<T = any> extends MSShapeChange {
    titleForContext<R = unknown, P0 = unknown>(_titleForContext: P0): R;
    validateWithContext<R = boolean, P0 = unknown>(_validateWithContext: P0): R;
  }
  namespace classes {
    export interface MSClosePathChange<T = any> extends MSShapeChange {
      alloc<R = MSClosePathChange>(): R;
      new: <R = MSClosePathChange>() => R;
      toggleClosePath<R = unknown>(): R;
    }
  }
}

declare const MSClosePathChange: cocoa.classes.MSClosePathChange;
