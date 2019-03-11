/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSKeyedUnarchiveHelper<T = any> extends cocoa.NSKeyedUnarchiver {
    cxx_destruct<R = void>(): R;
    unarchiver<R = cocoa.MSKeyedUnarchiver>(): R;
    setUnarchiver<R = void, P0 = cocoa.MSKeyedUnarchiver>(_v: P0): R;
  }
  namespace classes {
    export interface MSKeyedUnarchiveHelper<T = any> extends cocoa.classes.NSKeyedUnarchiver {
      alloc<R = MSKeyedUnarchiveHelper>(): R;
      new: <R = MSKeyedUnarchiveHelper>() => R;
    }
  }
}

declare const MSKeyedUnarchiveHelper: cocoa.classes.MSKeyedUnarchiveHelper;
