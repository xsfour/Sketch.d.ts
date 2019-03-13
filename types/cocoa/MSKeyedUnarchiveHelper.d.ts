/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSKeyedUnarchiveHelper<T = any> extends NSKeyedUnarchiver {
    cxx_destruct<R = void>(): R;
    unarchiver<R = MSKeyedUnarchiver>(): R;
    setUnarchiver<R = void, P0 = MSKeyedUnarchiver>(_v: P0): R;
  }
  namespace classes {
    export interface MSKeyedUnarchiveHelper<T = any> extends NSKeyedUnarchiver {
      alloc<R = MSKeyedUnarchiveHelper>(): R;
      new: <R = MSKeyedUnarchiveHelper>() => R;
    }
  }
}

declare const MSKeyedUnarchiveHelper: cocoa.classes.MSKeyedUnarchiveHelper;
