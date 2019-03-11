/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSJSONZippedArchiver<T = any> extends cocoa.MSJSONArchiver {
    encoder<R = unknown>(): R;
    encodableReferenceToOriginal<R = unknown, P0 = unknown>(_encodableReferenceToOriginal: P0): R;
    encodeReferenceObject<R = void, P0 = unknown>(_encodeReferenceObject: P0): R;
    finishEncodingError<R = boolean, P0 = unknown>(_finishEncodingError: P0): R;
    encodeRawData_toSubpath_error<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_encodeRawData: P0, _toSubpath: P1, _error: P2): R;
    encodeObject_toSubpath_error<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_encodeObject: P0, _toSubpath: P1, _error: P2): R;
    initWithURL<R = unknown, P0 = unknown>(_initWithURL: P0): R;
    zipEncoder<R = cocoa.BCJSONZippedEncoder>(): R;
    setZipEncoder<R = void, P0 = cocoa.BCJSONZippedEncoder>(_v: P0): R;
  }
  namespace classes {
    export interface MSJSONZippedArchiver<T = any> extends cocoa.classes.MSJSONArchiver {
      alloc<R = MSJSONZippedArchiver>(): R;
      new: <R = MSJSONZippedArchiver>() => R;
    }
  }
}

declare const MSJSONZippedArchiver: cocoa.classes.MSJSONZippedArchiver;
