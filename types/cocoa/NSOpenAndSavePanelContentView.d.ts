/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOpenAndSavePanelContentView<T = any> extends NSView {
    handleClientSideWindowDragEvents<R = boolean>(): R;
    setHandleClientSideWindowDragEvents<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface NSOpenAndSavePanelContentView<T = any> extends NSView {
      alloc<R = NSOpenAndSavePanelContentView>(): R;
      new: <R = NSOpenAndSavePanelContentView>() => R;
    }
  }
}

declare const NSOpenAndSavePanelContentView: cocoa.classes.NSOpenAndSavePanelContentView;
