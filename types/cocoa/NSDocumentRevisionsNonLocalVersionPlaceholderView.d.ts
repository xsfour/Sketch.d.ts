/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocumentRevisionsNonLocalVersionPlaceholderView<T = any> extends cocoa.NSDocumentRevisionsPlaceholderView {
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    _updateForProgress<R = void>(): R;
    setClickAction_target<R = void, P0 = string, P1 = unknown>(_setClickAction: P0, _target: P1): R;
    downloadProgress<R = cocoa.NSProgress>(): R;
    setDownloadProgress<R = void, P0 = cocoa.NSProgress>(_v: P0): R;
    hasButton<R = boolean>(): R;
    setHasButton<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface NSDocumentRevisionsNonLocalVersionPlaceholderView<T = any> extends cocoa.classes.NSDocumentRevisionsPlaceholderView {
      alloc<R = NSDocumentRevisionsNonLocalVersionPlaceholderView>(): R;
      new: <R = NSDocumentRevisionsNonLocalVersionPlaceholderView>() => R;
    }
  }
}

declare const NSDocumentRevisionsNonLocalVersionPlaceholderView: cocoa.classes.NSDocumentRevisionsNonLocalVersionPlaceholderView;
