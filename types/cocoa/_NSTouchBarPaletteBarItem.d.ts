/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTouchBarPaletteBarItem<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol {
    maxSize<R = cocoa.CGSize>(): R;
    preferredSize<R = cocoa.CGSize>(): R;
    minSize<R = cocoa.CGSize>(): R;
    _updateMinMaxSizeIfNeeded<R = void>(): R;
    itemSnapshotWithSize<R = unknown, P0 = cocoa.CGSize>(_itemSnapshotWithSize: P0): R;
    currentItemSnapshot<R = unknown>(): R;
    dealloc<R = void>(): R;
    disabledContainingGroupIdentifier<R = cocoa.NSString>(): R;
    setDisabledContainingGroupIdentifier<R = void, P0 = cocoa.NSString>(_v: P0): R;
    customizability<R = number>(): R;
    representedItem<R = cocoa.NSTouchBarItem>(): R;
    itemIdentifier<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface _NSTouchBarPaletteBarItem<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol {
      alloc<R = _NSTouchBarPaletteBarItem>(): R;
      new: <R = _NSTouchBarPaletteBarItem>() => R;
      paletteItemForBarItem_customizability<R = unknown, P0 = unknown, P1 = number>(_paletteItemForBarItem: P0, _customizability: P1): R;
    }
  }
}
