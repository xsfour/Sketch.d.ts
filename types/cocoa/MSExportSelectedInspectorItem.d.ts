/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSExportSelectedInspectorItem<T = any> extends MSInspectorItem {
    shareAction<R = void, P0 = unknown>(_shareAction: P0): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    shareButton<R = NSButton>(): R;
    setShareButton<R = void, P0 = NSButton>(_v: P0): R;
    shareButtonHandler<R = MSShareButtonHandler>(): R;
    setShareButtonHandler<R = void, P0 = MSShareButtonHandler>(_v: P0): R;
    exportButton<R = NSButton>(): R;
    setExportButton<R = void, P0 = NSButton>(_v: P0): R;
  }
  namespace classes {
    export interface MSExportSelectedInspectorItem<T = any> extends MSInspectorItem {
      alloc<R = MSExportSelectedInspectorItem>(): R;
      new: <R = MSExportSelectedInspectorItem>() => R;
    }
  }
}

declare const MSExportSelectedInspectorItem: cocoa.classes.MSExportSelectedInspectorItem;
