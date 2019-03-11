/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPasteboardReadingProtocol<T = any> {
    initWithPasteboardPropertyList_ofType<R = unknown, P0 = unknown, P1 = cocoa.NSString>(_initWithPasteboardPropertyList: P0, _ofType: P1): R;
  }
  namespace classes {
    export interface NSPasteboardReadingProtocol<T = any> {
      readableTypesForPasteboard<R = cocoa.NSArray, P0 = cocoa.NSPasteboard>(_readableTypesForPasteboard: P0): R;
      readingOptionsForType_pasteboard<R = number, P0 = cocoa.NSString, P1 = cocoa.NSPasteboard>(_readingOptionsForType: P0, _pasteboard: P1): R;
    }
  }
}

declare const NSPasteboardReadingProtocol: cocoa.classes.NSPasteboardReadingProtocol;
