/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSRTFPboardTypeConverter<T = any> extends cocoa._NSPboardTypeConverter, cocoa.NSPasteboardItemDataProviderProtocol {
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSRTFPboardTypeConverter<T = any> extends cocoa.classes._NSPboardTypeConverter, cocoa.classes.NSPasteboardItemDataProviderProtocol {
      alloc<R = _NSRTFPboardTypeConverter>(): R;
      new: <R = _NSRTFPboardTypeConverter>() => R;
      _getConvertedDataFromPasteboard_atIndex<R = unknown, P0 = unknown, P1 = number>(__getConvertedDataFromPasteboard: P0, _atIndex: P1): R;
    }
  }
}
