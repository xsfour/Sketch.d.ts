/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPasteboardWritingProtocol<T = any> {
    pasteboardPropertyListForType<R = unknown, P0 = NSString>(_pasteboardPropertyListForType: P0): R;
    writableTypesForPasteboard<R = NSArray, P0 = NSPasteboard>(_writableTypesForPasteboard: P0): R;
    writingOptionsForType_pasteboard<R = number, P0 = NSString, P1 = NSPasteboard>(_writingOptionsForType: P0, _pasteboard: P1): R;
  }
  namespace classes {
    export interface NSPasteboardWritingProtocol<T = any> {  }
  }
}
