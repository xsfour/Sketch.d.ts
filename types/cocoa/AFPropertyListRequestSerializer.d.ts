/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFPropertyListRequestSerializer<T = any> extends cocoa.AFHTTPRequestSerializer {
    writeOptions<R = number>(): R;
    setWriteOptions<R = void, P0 = number>(_v: P0): R;
    format<R = number>(): R;
    setFormat<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface AFPropertyListRequestSerializer<T = any> extends cocoa.classes.AFHTTPRequestSerializer {
      alloc<R = AFPropertyListRequestSerializer>(): R;
      new: <R = AFPropertyListRequestSerializer>() => R;
      serializerWithFormat_writeOptions<R = unknown, P0 = number, P1 = number>(_serializerWithFormat: P0, _writeOptions: P1): R;
    }
  }
}

declare const AFPropertyListRequestSerializer: cocoa.classes.AFPropertyListRequestSerializer;
