/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPasteboardItemDataProviderProtocol<T = any> extends NSObjectProtocol {
    pasteboard_item_provideDataForType<R = void, P0 = NSPasteboard, P1 = NSPasteboardItem, P2 = NSString>(_pasteboard: P0, _item: P1, _provideDataForType: P2): R;
    pasteboardFinishedWithDataProvider<R = void, P0 = NSPasteboard>(_pasteboardFinishedWithDataProvider: P0): R;
  }
  namespace classes {
    export interface NSPasteboardItemDataProviderProtocol<T = any> extends NSObjectProtocol {  }
  }
}
