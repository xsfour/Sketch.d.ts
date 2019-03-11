/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCLayerListViewController<T = any> extends cocoa.BCOutlineViewController {
    refreshRowHeightOfGroupItem_didExpand<R = void, P0 = unknown, P1 = boolean>(_refreshRowHeightOfGroupItem: P0, _didExpand: P1): R;
    floatingGroupRowItemToScrollToAfterCollapse<R = unknown>(): R;
    setFloatingGroupRowItemToScrollToAfterCollapse<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace classes {
    export interface BCLayerListViewController<T = any> extends cocoa.classes.BCOutlineViewController {
      alloc<R = BCLayerListViewController>(): R;
      new: <R = BCLayerListViewController>() => R;
      itemForExpansionStateNotification<R = unknown, P0 = unknown>(_itemForExpansionStateNotification: P0): R;
    }
  }
}

declare const BCLayerListViewController: cocoa.classes.BCLayerListViewController;
