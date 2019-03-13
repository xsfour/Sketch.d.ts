/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSKeyedArchiverHelper<T = any> extends NSKeyedArchiver {
    cxx_destruct<R = void>(): R;
    archiver<R = MSBaseArchiver>(): R;
    setArchiver<R = void, P0 = MSBaseArchiver>(_v: P0): R;
  }
  namespace classes {
    export interface MSKeyedArchiverHelper<T = any> extends NSKeyedArchiver {
      alloc<R = MSKeyedArchiverHelper>(): R;
      new: <R = MSKeyedArchiverHelper>() => R;
    }
  }
}

declare const MSKeyedArchiverHelper: cocoa.classes.MSKeyedArchiverHelper;
