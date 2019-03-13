/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MOUndefined<T = any> extends NSObject {}
  namespace classes {
    export interface MOUndefined<T = any> extends NSObject {
      alloc<R = MOUndefined>(): R;
      new: <R = MOUndefined>() => R;
      undefined<R = undefined>(): R;
    }
  }
}

declare const MOUndefined: cocoa.classes.MOUndefined;
