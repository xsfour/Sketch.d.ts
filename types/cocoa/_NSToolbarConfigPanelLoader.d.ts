/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSToolbarConfigPanelLoader<T = any> extends cocoa.NSObject {
    panel<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSToolbarConfigPanelLoader<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSToolbarConfigPanelLoader>(): R;
      new: <R = _NSToolbarConfigPanelLoader>() => R;
      loadPanelNamed<R = unknown, P0 = unknown>(_loadPanelNamed: P0): R;
    }
  }
}
