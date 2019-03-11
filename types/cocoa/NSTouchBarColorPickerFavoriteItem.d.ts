/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorPickerFavoriteItem<T = any> extends cocoa.NSCollectionViewItem, cocoa.NSGestureRecognizerDelegateProtocol {
    pressItem<R = void, P0 = unknown>(_pressItem: P0): R;
    selectionHandler<R = cocoa.CDUnknownBlockType>(): R;
    setSelectionHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    displayedColor<R = cocoa.NSColor>(): R;
    setDisplayedColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTouchBarColorPickerFavoriteItem<T = any> extends cocoa.classes.NSCollectionViewItem, cocoa.classes.NSGestureRecognizerDelegateProtocol {
      alloc<R = NSTouchBarColorPickerFavoriteItem>(): R;
      new: <R = NSTouchBarColorPickerFavoriteItem>() => R;
    }
  }
}

declare const NSTouchBarColorPickerFavoriteItem: cocoa.classes.NSTouchBarColorPickerFavoriteItem;
