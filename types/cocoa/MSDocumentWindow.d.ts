/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDocumentWindow<T = any> extends NSWindow {
    setAppearance<R = void, P0 = unknown>(_setAppearance: P0): R;
    refreshAppearanceDependentViews<R = void>(): R;
    touchBar<R = unknown>(): R;
    shouldDismissPopover_event<R = boolean, P0 = unknown, P1 = unknown>(_shouldDismissPopover: P0, _event: P1): R;
    lastForwardedKeyEvent<R = NSEvent>(): R;
    setLastForwardedKeyEvent<R = void, P0 = NSEvent>(_v: P0): R;
    titleBarBadge<R = BCWindowBadge>(): R;
    setTitleBarBadge<R = void, P0 = BCWindowBadge>(_v: P0): R;
  }
  namespace classes {
    export interface MSDocumentWindow<T = any> extends NSWindow {
      alloc<R = MSDocumentWindow>(): R;
      new: <R = MSDocumentWindow>() => R;
    }
  }
}

declare const MSDocumentWindow: cocoa.classes.MSDocumentWindow;
