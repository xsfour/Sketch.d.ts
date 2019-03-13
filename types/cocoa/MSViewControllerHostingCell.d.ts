/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSViewControllerHostingCell<T = any> extends NSTableCellView {
    installItem_owner_withParentViewController<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_installItem: P0, _owner: P1, _withParentViewController: P2): R;
    popHostedItemAndGetOwner<R = unknown, P0 = unknown>(_popHostedItemAndGetOwner: P0): R;
    itemOwner<R = MSInspectorItemProvider>(): R;
    setItemOwner<R = void, P0 = MSInspectorItemProvider>(_v: P0): R;
    hostedItem<R = NSViewController>(): R;
    setHostedItem<R = void, P0 = NSViewController>(_v: P0): R;
  }
  namespace classes {
    export interface MSViewControllerHostingCell<T = any> extends NSTableCellView {
      alloc<R = MSViewControllerHostingCell>(): R;
      new: <R = MSViewControllerHostingCell>() => R;
    }
  }
}

declare const MSViewControllerHostingCell: cocoa.classes.MSViewControllerHostingCell;
