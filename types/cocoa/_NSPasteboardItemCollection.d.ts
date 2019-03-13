/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPasteboardItemCollection<T = any> extends NSObject {
    pasteboardItemsWithItemCount_pasteboard_generationCount<R = unknown, P0 = number, P1 = unknown, P2 = number>(_pasteboardItemsWithItemCount: P0, _pasteboard: P1, _generationCount: P2): R;
    pasteboardItemAtIndex_pasteboard_generationCount<R = unknown, P0 = number, P1 = unknown, P2 = number>(_pasteboardItemAtIndex: P0, _pasteboard: P1, _generationCount: P2): R;
    addPasteboardItem_atIndex_generationCount<R = void, P0 = unknown, P1 = number, P2 = number>(_addPasteboardItem: P0, _atIndex: P1, _generationCount: P2): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface _NSPasteboardItemCollection<T = any> extends NSObject {
      alloc<R = _NSPasteboardItemCollection>(): R;
      new: <R = _NSPasteboardItemCollection>() => R;
    }
  }
}
