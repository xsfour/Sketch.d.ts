/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPasteboardWritingProtocol<T = any> {
    pasteboardPropertyListForType<R = unknown, P0 = cocoa.NSString>(_pasteboardPropertyListForType: P0): R;
    writableTypesForPasteboard<R = cocoa.NSArray, P0 = cocoa.NSPasteboard>(_writableTypesForPasteboard: P0): R;
    writingOptionsForType_pasteboard<R = number, P0 = cocoa.NSString, P1 = cocoa.NSPasteboard>(_writingOptionsForType: P0, _pasteboard: P1): R;
  }
  namespace classes {
    export interface NSPasteboardWritingProtocol<T = any> {  }
  }
}

declare const NSPasteboardWritingProtocol: cocoa.classes.NSPasteboardWritingProtocol;
