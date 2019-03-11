/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSToolbarSpaceItem<T = any> extends cocoa.NSToolbarItem {
    spaceItemSize<R = number>(): R;
    maxSize<R = cocoa.CGSize>(): R;
    minSize<R = cocoa.CGSize>(): R;
    view<R = unknown>(): R;
    _spaceView<R = unknown>(): R;
    _separatorFinishInit<R = void>(): R;
  }
  namespace classes {
    export interface NSToolbarSpaceItem<T = any> extends cocoa.classes.NSToolbarItem {
      alloc<R = NSToolbarSpaceItem>(): R;
      new: <R = NSToolbarSpaceItem>() => R;
      itemIdentifier<R = unknown>(): R;
    }
  }
}

declare const NSToolbarSpaceItem: cocoa.classes.NSToolbarSpaceItem;
