/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSKeyedUnarchiveFromDataTransformer<T = any> extends _NSSharedValueTransformer {
    description<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSKeyedUnarchiveFromDataTransformer<T = any> extends _NSSharedValueTransformer {
      alloc<R = _NSKeyedUnarchiveFromDataTransformer>(): R;
      new: <R = _NSKeyedUnarchiveFromDataTransformer>() => R;
    }
  }
}
