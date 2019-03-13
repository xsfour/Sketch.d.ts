/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBrowserTableView<T = any> extends NSTableView {
    preservesContentDuringLiveResize<R = boolean>(): R;
    setShouldSuppressDropHighlight<R = void, P0 = boolean>(_setShouldSuppressDropHighlight: P0): R;
    shouldSuppressDropHighlight<R = boolean>(): R;
    _setUsePrimaryColorForSelection<R = void, P0 = boolean>(__setUsePrimaryColorForSelection: P0): R;
    columnController<R = NSBrowserColumnViewController>(): R;
    setColumnController<R = void, P0 = NSBrowserColumnViewController>(_v: P0): R;
    columnIndex<R = number>(): R;
    browser<R = NSBrowser>(): R;
  }
  namespace classes {
    export interface NSBrowserTableView<T = any> extends NSTableView {
      alloc<R = NSBrowserTableView>(): R;
      new: <R = NSBrowserTableView>() => R;
    }
  }
}

declare const NSBrowserTableView: cocoa.classes.NSBrowserTableView;
