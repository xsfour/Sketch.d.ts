/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFJSONRequestSerializer<T = any> extends cocoa.AFHTTPRequestSerializer {
    writingOptions<R = number>(): R;
    setWritingOptions<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface AFJSONRequestSerializer<T = any> extends cocoa.classes.AFHTTPRequestSerializer {
      alloc<R = AFJSONRequestSerializer>(): R;
      new: <R = AFJSONRequestSerializer>() => R;
      serializerWithWritingOptions<R = unknown, P0 = number>(_serializerWithWritingOptions: P0): R;
    }
  }
}

declare const AFJSONRequestSerializer: cocoa.classes.AFJSONRequestSerializer;
