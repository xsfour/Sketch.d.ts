/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStatusBarButtonCell<T = any> extends cocoa.NSButtonCell {
    dismiss<R = void>(): R;
    _isExitFullScreenButton<R = boolean>(): R;
    setDoubleAction<R = void, P0 = string>(_setDoubleAction: P0): R;
    doubleAction<R = string>(): R;
    setStatusMenu<R = void, P0 = unknown>(_setStatusMenu: P0): R;
    statusMenu<R = unknown>(): R;
    statusBar<R = unknown>(): R;
    setStatusBar<R = void, P0 = unknown>(_setStatusBar: P0): R;
    setImagePosition<R = void, P0 = number>(_setImagePosition: P0): R;
    setTitle<R = void, P0 = unknown>(_setTitle: P0): R;
    setAlternateImage<R = void, P0 = unknown>(_setAlternateImage: P0): R;
    _statusItem<R = unknown>(): R;
    selectionInset<R = cocoa.NSEdgeInsets>(): R;
    setSelectionInset<R = void, P0 = cocoa.NSEdgeInsets>(_v: P0): R;
    looksDisabled<R = boolean>(): R;
    setLooksDisabled<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface NSStatusBarButtonCell<T = any> extends cocoa.classes.NSButtonCell {
      alloc<R = NSStatusBarButtonCell>(): R;
      new: <R = NSStatusBarButtonCell>() => R;
      popupStatusBarMenu_inRect_ofView_withEvent<R = void, P0 = unknown, P1 = cocoa.CGRect, P2 = unknown, P3 = unknown>(_popupStatusBarMenu: P0, _inRect: P1, _ofView: P2, _withEvent: P3): R;
      _endTrackingNavigationLoopOnMenu_withToken_view<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(__endTrackingNavigationLoopOnMenu: P0, _withToken: P1, _view: P2): R;
      _trackNavigationLoopOnMenu_view<R = unknown, P0 = unknown, P1 = unknown>(__trackNavigationLoopOnMenu: P0, _view: P1): R;
    }
  }
}

declare const NSStatusBarButtonCell: cocoa.classes.NSStatusBarButtonCell;
