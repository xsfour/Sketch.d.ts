/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPageableTableView<T = any> extends cocoa.NSTableView, cocoa.NSTableViewDelegateProtocol {
    setDelegate<R = void, P0 = unknown>(_setDelegate: P0): R;
    preservesContentDuringLiveResize<R = boolean>(): R;
    _updateMinimumHeightConstraint<R = void>(): R;
    scrollToPage<R = void>(): R;
    _updateLastVisibleHeightIfNeeded<R = void>(): R;
    _commonPageTableInit<R = void>(): R;
    pageCount<R = number>(): R;
    paged<R = boolean>(): R;
    setPaged<R = void, P0 = boolean>(_v: P0): R;
    page<R = number>(): R;
    setPage<R = void, P0 = number>(_v: P0): R;
    displayedRowCount<R = number>(): R;
    setDisplayedRowCount<R = void, P0 = number>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSPageableTableView<T = any> extends cocoa.classes.NSTableView, cocoa.classes.NSTableViewDelegateProtocol {
      alloc<R = NSPageableTableView>(): R;
      new: <R = NSPageableTableView>() => R;
    }
  }
}

declare const NSPageableTableView: cocoa.classes.NSPageableTableView;
