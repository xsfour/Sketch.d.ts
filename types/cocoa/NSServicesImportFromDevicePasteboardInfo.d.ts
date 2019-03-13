/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSServicesImportFromDevicePasteboardInfo<T = any> extends NSObject, NSPasteboardReadingProtocol {
    dealloc<R = void>(): R;
    localizedItemName<R = NSString>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSServicesImportFromDevicePasteboardInfo<T = any> extends NSObject, NSPasteboardReadingProtocol {
      alloc<R = NSServicesImportFromDevicePasteboardInfo>(): R;
      new: <R = NSServicesImportFromDevicePasteboardInfo>() => R;
    }
  }
}

declare const NSServicesImportFromDevicePasteboardInfo: cocoa.classes.NSServicesImportFromDevicePasteboardInfo;
