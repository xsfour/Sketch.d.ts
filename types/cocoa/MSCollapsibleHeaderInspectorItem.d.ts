/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCollapsibleHeaderInspectorItem<T = any> extends cocoa.MSHeaderInspectorItem {
    toggleCollapsed<R = void, P0 = unknown>(_toggleCollapsed: P0): R;
    setDelegate<R = void, P0 = unknown>(_setDelegate: P0): R;
    collapseTarget<R = cocoa.MSCollapsibleHeaderInspectorItemTarget>(): R;
    setCollapseTarget<R = void, P0 = cocoa.MSCollapsibleHeaderInspectorItemTarget>(_v: P0): R;
    collapsed<R = boolean>(): R;
    setCollapsed<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface MSCollapsibleHeaderInspectorItem<T = any> extends cocoa.classes.MSHeaderInspectorItem {
      alloc<R = MSCollapsibleHeaderInspectorItem>(): R;
      new: <R = MSCollapsibleHeaderInspectorItem>() => R;
    }
  }
}

declare const MSCollapsibleHeaderInspectorItem: cocoa.classes.MSCollapsibleHeaderInspectorItem;
