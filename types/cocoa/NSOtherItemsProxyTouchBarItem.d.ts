/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOtherItemsProxyTouchBarItem<T = any> extends cocoa.NSTouchBarItem {}
  namespace classes {
    export interface NSOtherItemsProxyTouchBarItem<T = any> extends cocoa.classes.NSTouchBarItem {
      alloc<R = NSOtherItemsProxyTouchBarItem>(): R;
      new: <R = NSOtherItemsProxyTouchBarItem>() => R;
    }
  }
}

declare const NSOtherItemsProxyTouchBarItem: cocoa.classes.NSOtherItemsProxyTouchBarItem;
