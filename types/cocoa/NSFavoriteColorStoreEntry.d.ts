/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFavoriteColorStoreEntry<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol {
    description<R = unknown>(): R;
    hash<R = number>(): R;
    dealloc<R = void>(): R;
    initWithColor_customClassName_customColorData<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithColor: P0, _customClassName: P1, _customColorData: P2): R;
    customColorData<R = cocoa.NSData>(): R;
    customColorClassName<R = cocoa.NSString>(): R;
    color<R = cocoa.NSColor>(): R;
  }
  namespace classes {
    export interface NSFavoriteColorStoreEntry<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol {
      alloc<R = NSFavoriteColorStoreEntry>(): R;
      new: <R = NSFavoriteColorStoreEntry>() => R;
      customEntryWithColorClassName_data_backstopColor<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_customEntryWithColorClassName: P0, _data: P1, _backstopColor: P2): R;
      entryWithColor<R = unknown, P0 = unknown>(_entryWithColor: P0): R;
    }
  }
}

declare const NSFavoriteColorStoreEntry: cocoa.classes.NSFavoriteColorStoreEntry;
