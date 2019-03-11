/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPasteboardItemDataProviderProtocol<T = any> extends cocoa.NSObjectProtocol {
    pasteboard_item_provideDataForType<R = void, P0 = cocoa.NSPasteboard, P1 = cocoa.NSPasteboardItem, P2 = cocoa.NSString>(_pasteboard: P0, _item: P1, _provideDataForType: P2): R;
    pasteboardFinishedWithDataProvider<R = void, P0 = cocoa.NSPasteboard>(_pasteboardFinishedWithDataProvider: P0): R;
  }
  namespace classes {
    export interface NSPasteboardItemDataProviderProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSPasteboardItemDataProviderProtocol: cocoa.classes.NSPasteboardItemDataProviderProtocol;
