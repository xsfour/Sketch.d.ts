/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSManageForeignSymbolsView<T = any> extends cocoa.NSViewController, cocoa.NSTableViewDataSourceProtocol, cocoa.NSTabViewDelegateProtocol {
    cxx_destruct<R = void>(): R;
    unlinkFromLibrary<R = void, P0 = unknown>(_unlinkFromLibrary: P0): R;
    editInLibrary<R = void, P0 = unknown>(_editInLibrary: P0): R;
    validateMenuItem<R = boolean, P0 = unknown>(_validateMenuItem: P0): R;
    showContextMenu<R = void, P0 = unknown>(_showContextMenu: P0): R;
    tableViewSelectionDidChange<R = void, P0 = unknown>(_tableViewSelectionDidChange: P0): R;
    buildSymbolList<R = void>(): R;
    contextMenu<R = cocoa.NSMenu>(): R;
    setContextMenu<R = void, P0 = cocoa.NSMenu>(_v: P0): R;
    cogEnabled<R = boolean>(): R;
    setCogEnabled<R = void, P0 = boolean>(_v: P0): R;
    symbols<R = cocoa.NSArray>(): R;
    setSymbols<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    tableView<R = cocoa.NSTableView>(): R;
    setTableView<R = void, P0 = cocoa.NSTableView>(_v: P0): R;
    document<R = cocoa.MSDocument>(): R;
    setDocument<R = void, P0 = cocoa.MSDocument>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSManageForeignSymbolsView<T = any> extends cocoa.classes.NSViewController, cocoa.classes.NSTableViewDataSourceProtocol, cocoa.classes.NSTabViewDelegateProtocol {
      alloc<R = MSManageForeignSymbolsView>(): R;
      new: <R = MSManageForeignSymbolsView>() => R;
    }
  }
}

declare const MSManageForeignSymbolsView: cocoa.classes.MSManageForeignSymbolsView;
