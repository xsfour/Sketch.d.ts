/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSKeyedArchiver<T = any> extends MSBaseArchiver {
    archivedData<R = NSMutableData>(): R;
    setArchivedData<R = void, P0 = NSMutableData>(_v: P0): R;
    archiveHelper<R = MSKeyedArchiverHelper>(): R;
    setArchiveHelper<R = void, P0 = MSKeyedArchiverHelper>(_v: P0): R;
  }
  namespace classes {
    export interface MSKeyedArchiver<T = any> extends MSBaseArchiver {
      alloc<R = MSKeyedArchiver>(): R;
      new: <R = MSKeyedArchiver>() => R;
    }
  }
}

declare const MSKeyedArchiver: cocoa.classes.MSKeyedArchiver;
