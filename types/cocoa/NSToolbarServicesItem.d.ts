/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSToolbarServicesItem<T = any> extends cocoa.NSToolbarItem {
    representedObject<R = unknown>(): R;
  }
  namespace classes {
    export interface NSToolbarServicesItem<T = any> extends cocoa.classes.NSToolbarItem {
      alloc<R = NSToolbarServicesItem>(): R;
      new: <R = NSToolbarServicesItem>() => R;
    }
  }
}

declare const NSToolbarServicesItem: cocoa.classes.NSToolbarServicesItem;
