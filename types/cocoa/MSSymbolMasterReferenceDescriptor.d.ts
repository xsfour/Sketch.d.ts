/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSymbolMasterReferenceDescriptor<T = any> extends cocoa.NSObject, cocoa.NSPasteboardWritingProtocol, cocoa.NSPasteboardReadingProtocol {
    cxx_destruct<R = void>(): R;
    symbolID<R = cocoa.NSString>(): R;
    setSymbolID<R = void, P0 = cocoa.NSString>(_v: P0): R;
    libraryLocation<R = cocoa.NSURL>(): R;
    setLibraryLocation<R = void, P0 = cocoa.NSURL>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSSymbolMasterReferenceDescriptor<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSPasteboardWritingProtocol, cocoa.classes.NSPasteboardReadingProtocol {
      alloc<R = MSSymbolMasterReferenceDescriptor>(): R;
      new: <R = MSSymbolMasterReferenceDescriptor>() => R;
      pasteboardType<R = unknown>(): R;
    }
  }
}

declare const MSSymbolMasterReferenceDescriptor: cocoa.classes.MSSymbolMasterReferenceDescriptor;
