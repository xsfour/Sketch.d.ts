/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFilePromiseTypeConverter<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface _NSFilePromiseTypeConverter<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSFilePromiseTypeConverter>(): R;
      new: <R = _NSFilePromiseTypeConverter>() => R;
      _getConvertedDataFromPasteboard<R = unknown, P0 = unknown>(__getConvertedDataFromPasteboard: P0): R;
    }
  }
}
