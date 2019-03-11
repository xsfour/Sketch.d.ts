/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSListTypeActionNone<T = any> extends cocoa.MSListTypeAction {
    label<R = unknown>(): R;
    setListTypeNone<R = void, P0 = unknown>(_setListTypeNone: P0): R;
    marker<R = unknown>(): R;
  }
  namespace classes {
    export interface MSListTypeActionNone<T = any> extends cocoa.classes.MSListTypeAction {
      alloc<R = MSListTypeActionNone>(): R;
      new: <R = MSListTypeActionNone>() => R;
    }
  }
}

declare const MSListTypeActionNone: cocoa.classes.MSListTypeActionNone;
