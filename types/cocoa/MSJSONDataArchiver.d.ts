/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSJSONDataArchiver<T = any> extends cocoa.MSJSONArchiver {
    encoder<R = unknown>(): R;
    archivedData<R = cocoa.NSMutableData>(): R;
    setArchivedData<R = void, P0 = cocoa.NSMutableData>(_v: P0): R;
    dataEncoder<R = cocoa.BCJSONEncoder>(): R;
    setDataEncoder<R = void, P0 = cocoa.BCJSONEncoder>(_v: P0): R;
  }
  namespace classes {
    export interface MSJSONDataArchiver<T = any> extends cocoa.classes.MSJSONArchiver {
      alloc<R = MSJSONDataArchiver>(): R;
      new: <R = MSJSONDataArchiver>() => R;
      archiveStringWithRootObject_error<R = unknown, P0 = unknown, P1 = unknown>(_archiveStringWithRootObject: P0, _error: P1): R;
    }
  }
}

declare const MSJSONDataArchiver: cocoa.classes.MSJSONDataArchiver;
