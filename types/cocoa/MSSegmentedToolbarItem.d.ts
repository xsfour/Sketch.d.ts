/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSegmentedToolbarItem<T = any> extends cocoa.NSToolbarItemGroup {
    validateWithAction<R = void, P0 = unknown>(_validateWithAction: P0): R;
    makeViewForAction<R = unknown, P0 = unknown>(_makeViewForAction: P0): R;
    initWithAction_forToolbar<R = unknown, P0 = unknown, P1 = boolean>(_initWithAction: P0, _forToolbar: P1): R;
  }
  namespace classes {
    export interface MSSegmentedToolbarItem<T = any> extends cocoa.classes.NSToolbarItemGroup {
      alloc<R = MSSegmentedToolbarItem>(): R;
      new: <R = MSSegmentedToolbarItem>() => R;
    }
  }
}

declare const MSSegmentedToolbarItem: cocoa.classes.MSSegmentedToolbarItem;
