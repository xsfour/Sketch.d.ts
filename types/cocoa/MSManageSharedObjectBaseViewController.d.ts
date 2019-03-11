/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSManageSharedObjectBaseViewController<T = any> extends cocoa.NSViewController, cocoa.NSTableViewDataSourceProtocol, cocoa.NSTableViewDelegateProtocol {
    cxx_destruct<R = void>(): R;
    deleteSelectedObjects<R = void, P0 = unknown>(_deleteSelectedObjects: P0): R;
    removeSharedObject<R = void, P0 = unknown>(_removeSharedObject: P0): R;
    awakeFromNib<R = void>(): R;
    document<R = cocoa.MSDocument>(): R;
    setDocument<R = void, P0 = cocoa.MSDocument>(_v: P0): R;
    tableView<R = cocoa.NSTableView>(): R;
    setTableView<R = void, P0 = cocoa.NSTableView>(_v: P0): R;
    sharedObjectsSortedByName<R = cocoa.NSArray>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSManageSharedObjectBaseViewController<T = any> extends cocoa.classes.NSViewController, cocoa.classes.NSTableViewDataSourceProtocol, cocoa.classes.NSTableViewDelegateProtocol {
      alloc<R = MSManageSharedObjectBaseViewController>(): R;
      new: <R = MSManageSharedObjectBaseViewController>() => R;
    }
  }
}

declare const MSManageSharedObjectBaseViewController: cocoa.classes.MSManageSharedObjectBaseViewController;
