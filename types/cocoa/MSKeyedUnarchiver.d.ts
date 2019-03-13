/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSKeyedUnarchiver<T = any> extends MSBaseUnarchiver {
    unarchiveHelper<R = MSKeyedUnarchiveHelper>(): R;
    setUnarchiveHelper<R = void, P0 = MSKeyedUnarchiveHelper>(_v: P0): R;
    legacyImages<R = NSDictionary>(): R;
    setLegacyImages<R = void, P0 = NSDictionary>(_v: P0): R;
  }
  namespace classes {
    export interface MSKeyedUnarchiver<T = any> extends MSBaseUnarchiver {
      alloc<R = MSKeyedUnarchiver>(): R;
      new: <R = MSKeyedUnarchiver>() => R;
      unarchiveObjectFromURL_error<R = unknown, P0 = unknown, P1 = unknown>(_unarchiveObjectFromURL: P0, _error: P1): R;
      defineReplacementClasses<R = void>(): R;
      initialize<R = void>(): R;
    }
  }
}

declare const MSKeyedUnarchiver: cocoa.classes.MSKeyedUnarchiver;
