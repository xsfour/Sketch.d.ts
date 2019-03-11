/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSUnarchiveFromDataTransformer<T = any> extends cocoa._NSSharedValueTransformer {
    description<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSUnarchiveFromDataTransformer<T = any> extends cocoa.classes._NSSharedValueTransformer {
      alloc<R = _NSUnarchiveFromDataTransformer>(): R;
      new: <R = _NSUnarchiveFromDataTransformer>() => R;
    }
  }
}
