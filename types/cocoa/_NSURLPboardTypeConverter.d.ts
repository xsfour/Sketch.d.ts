/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSURLPboardTypeConverter<T = any> extends cocoa._NSPboardTypeConverter {}
  namespace classes {
    export interface _NSURLPboardTypeConverter<T = any> extends cocoa.classes._NSPboardTypeConverter {
      alloc<R = _NSURLPboardTypeConverter>(): R;
      new: <R = _NSURLPboardTypeConverter>() => R;
      _getConvertedDataFromPasteboard_securityScoped<R = unknown, P0 = unknown, P1 = boolean>(__getConvertedDataFromPasteboard: P0, _securityScoped: P1): R;
    }
  }
}
