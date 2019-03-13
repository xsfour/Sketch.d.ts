/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSToolbarServicesItem<T = any> extends NSToolbarItem {
    representedObject<R = unknown>(): R;
  }
  namespace classes {
    export interface NSToolbarServicesItem<T = any> extends NSToolbarItem {
      alloc<R = NSToolbarServicesItem>(): R;
      new: <R = NSToolbarServicesItem>() => R;
    }
  }
}

declare const NSToolbarServicesItem: cocoa.classes.NSToolbarServicesItem;
