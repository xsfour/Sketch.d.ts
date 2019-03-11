/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSToolbarCloudSharingItem<T = any> extends cocoa.NSToolbarItem {
    _setShared<R = void, P0 = boolean>(__setShared: P0): R;
  }
  namespace classes {
    export interface NSToolbarCloudSharingItem<T = any> extends cocoa.classes.NSToolbarItem {
      alloc<R = NSToolbarCloudSharingItem>(): R;
      new: <R = NSToolbarCloudSharingItem>() => R;
    }
  }
}

declare const NSToolbarCloudSharingItem: cocoa.classes.NSToolbarCloudSharingItem;
