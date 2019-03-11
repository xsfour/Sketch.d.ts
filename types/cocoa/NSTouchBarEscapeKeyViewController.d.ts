/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarEscapeKeyViewController<T = any> extends cocoa.NSViewController {
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    refreshSubviews<R = void>(): R;
    constraintsDidChangeInEngine<R = void, P0 = unknown>(_constraintsDidChangeInEngine: P0): R;
    _noteTouchBarItemViewChanged<R = void>(): R;
    _measuredPreferredSize<R = cocoa.CGSize>(): R;
    preferredSize<R = cocoa.CGSize>(): R;
    touchBarItem<R = cocoa.NSTouchBarItem>(): R;
    setTouchBarItem<R = void, P0 = cocoa.NSTouchBarItem>(_v: P0): R;
  }
  namespace classes {
    export interface NSTouchBarEscapeKeyViewController<T = any> extends cocoa.classes.NSViewController {
      alloc<R = NSTouchBarEscapeKeyViewController>(): R;
      new: <R = NSTouchBarEscapeKeyViewController>() => R;
    }
  }
}

declare const NSTouchBarEscapeKeyViewController: cocoa.classes.NSTouchBarEscapeKeyViewController;
