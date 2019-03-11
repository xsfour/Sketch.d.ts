/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSToolbarSeparatorItem<T = any> extends cocoa.NSToolbarItem {
    view<R = unknown>(): R;
    _separatorFinishInit<R = void>(): R;
    maxSize<R = cocoa.CGSize>(): R;
    minSize<R = cocoa.CGSize>(): R;
  }
  namespace classes {
    export interface NSToolbarSeparatorItem<T = any> extends cocoa.classes.NSToolbarItem {
      alloc<R = NSToolbarSeparatorItem>(): R;
      new: <R = NSToolbarSeparatorItem>() => R;
      itemIdentifier<R = unknown>(): R;
    }
  }
}

declare const NSToolbarSeparatorItem: cocoa.classes.NSToolbarSeparatorItem;
