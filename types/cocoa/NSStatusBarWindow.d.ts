/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStatusBarWindow<T = any> extends cocoa.NSWindow {
    viewNeedsDisplayInRectNotification<R = void, P0 = unknown>(_viewNeedsDisplayInRectNotification: P0): R;
    canHide<R = boolean>(): R;
    worksWhenModal<R = boolean>(): R;
    _noticeStatusBarVisibilityChangeIfNecessary<R = void>(): R;
    windowRef<R = void>(): R;
    setStatusBarView<R = void, P0 = unknown>(_setStatusBarView: P0): R;
    _testForAllowsVibrancy<R = void>(): R;
    underlaySelectionHighlight<R = void, P0 = boolean>(_underlaySelectionHighlight: P0): R;
    hasSelectionRect<R = boolean>(): R;
    setSelection_inRect_ofView_drawImmediately<R = void, P0 = boolean, P1 = cocoa.CGRect, P2 = unknown, P3 = boolean>(_setSelection: P0, _inRect: P1, _ofView: P2, _drawImmediately: P3): R;
    setSelection_inRect_ofView<R = void, P0 = boolean, P1 = cocoa.CGRect, P2 = unknown>(_setSelection: P0, _inRect: P1, _ofView: P2): R;
    _updateVisualEffectViewMaterial<R = void>(): R;
    initWithContentRect<R = unknown, P0 = cocoa.CGRect>(_initWithContentRect: P0): R;
    effectView<R = cocoa.NSVisualEffectView>(): R;
    setEffectView<R = void, P0 = cocoa.NSVisualEffectView>(_v: P0): R;
    statusItem<R = cocoa.NSStatusItem>(): R;
    setStatusItem<R = void, P0 = cocoa.NSStatusItem>(_v: P0): R;
    allowsVibrancy<R = boolean>(): R;
    setAllowsVibrancy<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface NSStatusBarWindow<T = any> extends cocoa.classes.NSWindow {
      alloc<R = NSStatusBarWindow>(): R;
      new: <R = NSStatusBarWindow>() => R;
    }
  }
}

declare const NSStatusBarWindow: cocoa.classes.NSStatusBarWindow;
