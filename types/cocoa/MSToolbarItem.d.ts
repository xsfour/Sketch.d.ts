/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToolbarItem<T = any> extends cocoa.NSToolbarItem {
    makeViewForAction<R = unknown, P0 = unknown>(_makeViewForAction: P0): R;
    initWithAction<R = unknown, P0 = unknown>(_initWithAction: P0): R;
  }
  namespace classes {
    export interface MSToolbarItem<T = any> extends cocoa.classes.NSToolbarItem {
      alloc<R = MSToolbarItem>(): R;
      new: <R = MSToolbarItem>() => R;
    }
  }
}

declare const MSToolbarItem: cocoa.classes.MSToolbarItem;
