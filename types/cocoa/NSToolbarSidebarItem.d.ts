/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSToolbarSidebarItem<T = any> extends NSToolbarItem {}
  namespace classes {
    export interface NSToolbarSidebarItem<T = any> extends NSToolbarItem {
      alloc<R = NSToolbarSidebarItem>(): R;
      new: <R = NSToolbarSidebarItem>() => R;
    }
  }
}

declare const NSToolbarSidebarItem: cocoa.classes.NSToolbarSidebarItem;
