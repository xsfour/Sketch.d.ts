/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSArchiver<T = any> extends NSCoder {
    classNameEncodedForTrueClassName<R = unknown, P0 = unknown>(_classNameEncodedForTrueClassName: P0): R;
    encodeClassName_intoClassName<R = void, P0 = unknown, P1 = unknown>(_encodeClassName: P0, _intoClassName: P1): R;
    replaceObject_withObject<R = void, P0 = unknown, P1 = unknown>(_replaceObject: P0, _withObject: P1): R;
    dealloc<R = void>(): R;
    data<R = unknown>(): R;
    initForWritingWithMutableData<R = unknown, P0 = unknown>(_initForWritingWithMutableData: P0): R;
    archiverData<R = NSMutableData>(): R;
  }
  namespace classes {
    export interface NSArchiver<T = any> extends NSCoder {
      alloc<R = NSArchiver>(): R;
      new: <R = NSArchiver>() => R;
      archiveRootObject_toFile<R = boolean, P0 = unknown, P1 = unknown>(_archiveRootObject: P0, _toFile: P1): R;
      archivedDataWithRootObject<R = unknown, P0 = unknown>(_archivedDataWithRootObject: P0): R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSArchiver: cocoa.classes.NSArchiver;
