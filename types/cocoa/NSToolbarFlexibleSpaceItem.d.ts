/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSToolbarFlexibleSpaceItem<T = any> extends cocoa.NSToolbarItem {
    trackedSplitViewDividerIndex<R = number>(): R;
    setTrackedSplitViewDividerIndex<R = void, P0 = number>(_setTrackedSplitViewDividerIndex: P0): R;
    trackedSplitView<R = unknown>(): R;
    setTrackedSplitView<R = void, P0 = unknown>(_setTrackedSplitView: P0): R;
    maxSize<R = cocoa.CGSize>(): R;
    minSize<R = cocoa.CGSize>(): R;
    view<R = unknown>(): R;
    _separatorFinishInit<R = void>(): R;
  }
  namespace classes {
    export interface NSToolbarFlexibleSpaceItem<T = any> extends cocoa.classes.NSToolbarItem {
      alloc<R = NSToolbarFlexibleSpaceItem>(): R;
      new: <R = NSToolbarFlexibleSpaceItem>() => R;
      itemIdentifier<R = unknown>(): R;
    }
  }
}

declare const NSToolbarFlexibleSpaceItem: cocoa.classes.NSToolbarFlexibleSpaceItem;
