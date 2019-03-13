/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSRTFPboardTypeConverter<T = any> extends _NSPboardTypeConverter, NSPasteboardItemDataProviderProtocol {
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSRTFPboardTypeConverter<T = any> extends _NSPboardTypeConverter, NSPasteboardItemDataProviderProtocol {
      alloc<R = _NSRTFPboardTypeConverter>(): R;
      new: <R = _NSRTFPboardTypeConverter>() => R;
      _getConvertedDataFromPasteboard_atIndex<R = unknown, P0 = unknown, P1 = number>(__getConvertedDataFromPasteboard: P0, _atIndex: P1): R;
    }
  }
}
