/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSToolbarSeparatorItem<T = any> extends NSToolbarItem {
    view<R = unknown>(): R;
    _separatorFinishInit<R = void>(): R;
    maxSize<R = CGSize>(): R;
    minSize<R = CGSize>(): R;
  }
  namespace classes {
    export interface NSToolbarSeparatorItem<T = any> extends NSToolbarItem {
      alloc<R = NSToolbarSeparatorItem>(): R;
      new: <R = NSToolbarSeparatorItem>() => R;
      itemIdentifier<R = unknown>(): R;
    }
  }
}

declare const NSToolbarSeparatorItem: cocoa.classes.NSToolbarSeparatorItem;
