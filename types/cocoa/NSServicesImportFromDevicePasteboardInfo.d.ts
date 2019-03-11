/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSServicesImportFromDevicePasteboardInfo<T = any> extends cocoa.NSObject, cocoa.NSPasteboardReadingProtocol {
    dealloc<R = void>(): R;
    localizedItemName<R = cocoa.NSString>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSServicesImportFromDevicePasteboardInfo<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSPasteboardReadingProtocol {
      alloc<R = NSServicesImportFromDevicePasteboardInfo>(): R;
      new: <R = NSServicesImportFromDevicePasteboardInfo>() => R;
    }
  }
}

declare const NSServicesImportFromDevicePasteboardInfo: cocoa.classes.NSServicesImportFromDevicePasteboardInfo;
