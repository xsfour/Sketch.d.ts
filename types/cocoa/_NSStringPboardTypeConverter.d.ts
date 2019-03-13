/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSStringPboardTypeConverter<T = any> extends _NSPboardTypeConverter {}
  namespace classes {
    export interface _NSStringPboardTypeConverter<T = any> extends _NSPboardTypeConverter {
      alloc<R = _NSStringPboardTypeConverter>(): R;
      new: <R = _NSStringPboardTypeConverter>() => R;
      _getConvertedDataFromPasteboard_atIndex<R = unknown, P0 = unknown, P1 = number>(__getConvertedDataFromPasteboard: P0, _atIndex: P1): R;
    }
  }
}
