/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFPropertyListResponseSerializer<T = any> extends AFHTTPResponseSerializer {
    readOptions<R = number>(): R;
    setReadOptions<R = void, P0 = number>(_v: P0): R;
    format<R = number>(): R;
    setFormat<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface AFPropertyListResponseSerializer<T = any> extends AFHTTPResponseSerializer {
      alloc<R = AFPropertyListResponseSerializer>(): R;
      new: <R = AFPropertyListResponseSerializer>() => R;
      serializerWithFormat_readOptions<R = unknown, P0 = number, P1 = number>(_serializerWithFormat: P0, _readOptions: P1): R;
    }
  }
}

declare const AFPropertyListResponseSerializer: cocoa.classes.AFPropertyListResponseSerializer;
