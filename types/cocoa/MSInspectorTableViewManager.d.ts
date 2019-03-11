/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorTableViewManager<T = any> extends cocoa.NSObject, cocoa.NSTableViewDataSourceProtocol, cocoa.NSTableViewDelegateProtocol {
    cxx_destruct<R = void>(): R;
    wantsSeparatorForRow<R = boolean, P0 = number>(_wantsSeparatorForRow: P0): R;
    itemIndexPathForRowIndex<R = unknown, P0 = number>(_itemIndexPathForRowIndex: P0): R;
    sectionItemIndex_forRowIndex<R = unknown, P0 = number, P1 = number>(_sectionItemIndex: P0, _forRowIndex: P1): R;
    sectionForRow<R = unknown, P0 = number>(_sectionForRow: P0): R;
    sections<R = unknown>(): R;
    manageTableView<R = void, P0 = unknown>(_manageTableView: P0): R;
    delegate<R = cocoa.MSInspectorTableViewManagerDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.MSInspectorTableViewManagerDelegate>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSInspectorTableViewManager<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSTableViewDataSourceProtocol, cocoa.classes.NSTableViewDelegateProtocol {
      alloc<R = MSInspectorTableViewManager>(): R;
      new: <R = MSInspectorTableViewManager>() => R;
    }
  }
}

declare const MSInspectorTableViewManager: cocoa.classes.MSInspectorTableViewManager;
