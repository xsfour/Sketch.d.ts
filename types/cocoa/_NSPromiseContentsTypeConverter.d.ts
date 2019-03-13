/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPromiseContentsTypeConverter<T = any> extends NSObject {}
  namespace classes {
    export interface _NSPromiseContentsTypeConverter<T = any> extends NSObject {
      alloc<R = _NSPromiseContentsTypeConverter>(): R;
      new: <R = _NSPromiseContentsTypeConverter>() => R;
      _getConvertedDataFromPasteboard_securityScoped<R = unknown, P0 = unknown, P1 = boolean>(__getConvertedDataFromPasteboard: P0, _securityScoped: P1): R;
    }
  }
}
