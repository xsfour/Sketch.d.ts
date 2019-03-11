/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSToolbarGapItem<T = any> extends cocoa.NSToolbarItem {
    proxiedToolbarItem<R = unknown>(): R;
    configureAsProxyForItem_usingMetrics<R = void, P0 = unknown, P1 = cocoa.__NSToolbarMetrics>(_configureAsProxyForItem: P0, _usingMetrics: P1): R;
  }
  namespace classes {
    export interface _NSToolbarGapItem<T = any> extends cocoa.classes.NSToolbarItem {
      alloc<R = _NSToolbarGapItem>(): R;
      new: <R = _NSToolbarGapItem>() => R;
    }
  }
}
