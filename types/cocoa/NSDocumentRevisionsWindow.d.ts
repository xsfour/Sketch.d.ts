/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocumentRevisionsWindow<T = any> extends cocoa.NSWindow {
    canBecomeMainWindow<R = boolean>(): R;
    canBecomeKeyWindow<R = boolean>(): R;
    initWithController<R = unknown, P0 = unknown>(_initWithController: P0): R;
    view<R = cocoa.NSDocumentRevisionsView>(): R;
  }
  namespace classes {
    export interface NSDocumentRevisionsWindow<T = any> extends cocoa.classes.NSWindow {
      alloc<R = NSDocumentRevisionsWindow>(): R;
      new: <R = NSDocumentRevisionsWindow>() => R;
    }
  }
}

declare const NSDocumentRevisionsWindow: cocoa.classes.NSDocumentRevisionsWindow;
