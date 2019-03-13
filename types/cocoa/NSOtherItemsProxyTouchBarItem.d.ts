/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOtherItemsProxyTouchBarItem<T = any> extends NSTouchBarItem {}
  namespace classes {
    export interface NSOtherItemsProxyTouchBarItem<T = any> extends NSTouchBarItem {
      alloc<R = NSOtherItemsProxyTouchBarItem>(): R;
      new: <R = NSOtherItemsProxyTouchBarItem>() => R;
    }
  }
}

declare const NSOtherItemsProxyTouchBarItem: cocoa.classes.NSOtherItemsProxyTouchBarItem;
