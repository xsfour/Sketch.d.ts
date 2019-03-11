/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSKeyedArchiver<T = any> extends cocoa.MSBaseArchiver {
    archivedData<R = cocoa.NSMutableData>(): R;
    setArchivedData<R = void, P0 = cocoa.NSMutableData>(_v: P0): R;
    archiveHelper<R = cocoa.MSKeyedArchiverHelper>(): R;
    setArchiveHelper<R = void, P0 = cocoa.MSKeyedArchiverHelper>(_v: P0): R;
  }
  namespace classes {
    export interface MSKeyedArchiver<T = any> extends cocoa.classes.MSBaseArchiver {
      alloc<R = MSKeyedArchiver>(): R;
      new: <R = MSKeyedArchiver>() => R;
    }
  }
}

declare const MSKeyedArchiver: cocoa.classes.MSKeyedArchiver;
