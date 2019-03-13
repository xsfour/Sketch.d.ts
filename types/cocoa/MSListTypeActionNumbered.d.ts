/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSListTypeActionNumbered<T = any> extends MSListTypeAction {
    label<R = unknown>(): R;
    setListTypeNumbered<R = void, P0 = unknown>(_setListTypeNumbered: P0): R;
    marker<R = unknown>(): R;
  }
  namespace classes {
    export interface MSListTypeActionNumbered<T = any> extends MSListTypeAction {
      alloc<R = MSListTypeActionNumbered>(): R;
      new: <R = MSListTypeActionNumbered>() => R;
    }
  }
}

declare const MSListTypeActionNumbered: cocoa.classes.MSListTypeActionNumbered;
