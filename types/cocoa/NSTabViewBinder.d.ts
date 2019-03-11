/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabViewBinder<T = any> extends cocoa.NSViewStateBinder {
    tabView_didSelectTabViewItem<R = void, P0 = unknown, P1 = unknown>(_tabView: P0, _didSelectTabViewItem: P1): R;
    _selectInTabView_itemWithIdentifier<R = void, P0 = unknown, P1 = unknown>(__selectInTabView: P0, _itemWithIdentifier: P1): R;
    _selectInTabView_itemWithLabel<R = void, P0 = unknown, P1 = unknown>(__selectInTabView: P0, _itemWithLabel: P1): R;
    _selectInTabView_itemAtIndex<R = void, P0 = unknown, P1 = unknown>(__selectInTabView: P0, _itemAtIndex: P1): R;
  }
  namespace classes {
    export interface NSTabViewBinder<T = any> extends cocoa.classes.NSViewStateBinder {
      alloc<R = NSTabViewBinder>(): R;
      new: <R = NSTabViewBinder>() => R;
    }
  }
}

declare const NSTabViewBinder: cocoa.classes.NSTabViewBinder;
