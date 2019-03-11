/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSToolbarSidebarItem<T = any> extends cocoa.NSToolbarItem {}
  namespace classes {
    export interface NSToolbarSidebarItem<T = any> extends cocoa.classes.NSToolbarItem {
      alloc<R = NSToolbarSidebarItem>(): R;
      new: <R = NSToolbarSidebarItem>() => R;
    }
  }
}

declare const NSToolbarSidebarItem: cocoa.classes.NSToolbarSidebarItem;
