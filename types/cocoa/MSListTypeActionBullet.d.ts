/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSListTypeActionBullet<T = any> extends cocoa.MSListTypeAction {
    label<R = unknown>(): R;
    setListTypeBullet<R = void, P0 = unknown>(_setListTypeBullet: P0): R;
    marker<R = unknown>(): R;
  }
  namespace classes {
    export interface MSListTypeActionBullet<T = any> extends cocoa.classes.MSListTypeAction {
      alloc<R = MSListTypeActionBullet>(): R;
      new: <R = MSListTypeActionBullet>() => R;
    }
  }
}

declare const MSListTypeActionBullet: cocoa.classes.MSListTypeActionBullet;
