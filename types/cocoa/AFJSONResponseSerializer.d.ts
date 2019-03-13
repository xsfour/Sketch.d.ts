/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFJSONResponseSerializer<T = any> extends AFHTTPResponseSerializer {
    removesKeysWithNullValues<R = boolean>(): R;
    setRemovesKeysWithNullValues<R = void, P0 = boolean>(_v: P0): R;
    readingOptions<R = number>(): R;
    setReadingOptions<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface AFJSONResponseSerializer<T = any> extends AFHTTPResponseSerializer {
      alloc<R = AFJSONResponseSerializer>(): R;
      new: <R = AFJSONResponseSerializer>() => R;
      serializerWithReadingOptions<R = unknown, P0 = number>(_serializerWithReadingOptions: P0): R;
    }
  }
}

declare const AFJSONResponseSerializer: cocoa.classes.AFJSONResponseSerializer;
