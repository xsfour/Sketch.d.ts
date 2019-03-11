/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSKeyedArchiverHelper<T = any> extends cocoa.NSKeyedArchiver {
    cxx_destruct<R = void>(): R;
    archiver<R = cocoa.MSBaseArchiver>(): R;
    setArchiver<R = void, P0 = cocoa.MSBaseArchiver>(_v: P0): R;
  }
  namespace classes {
    export interface MSKeyedArchiverHelper<T = any> extends cocoa.classes.NSKeyedArchiver {
      alloc<R = MSKeyedArchiverHelper>(): R;
      new: <R = MSKeyedArchiverHelper>() => R;
    }
  }
}

declare const MSKeyedArchiverHelper: cocoa.classes.MSKeyedArchiverHelper;
