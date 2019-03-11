/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFunctionRowActionTracker<T = any> extends cocoa.NSObject {
    _ns_logAction_ns<R = void, P0 = unknown>(__ns_logAction_ns: P0): R;
    _log<R = void>(): R;
    dealloc<R = void>(): R;
    originalAction<R = string>(): R;
    setOriginalAction<R = void, P0 = string>(_v: P0): R;
    originalTarget<R = unknown>(): R;
    setOriginalTarget<R = void, P0 = unknown>(_v: P0): R;
    control<R = cocoa.NSControl>(): R;
    setControl<R = void, P0 = cocoa.NSControl>(_v: P0): R;
    recognizer<R = cocoa.NSGestureRecognizer>(): R;
    setRecognizer<R = void, P0 = cocoa.NSGestureRecognizer>(_v: P0): R;
    touch<R = cocoa.NSTouch>(): R;
    setTouch<R = void, P0 = cocoa.NSTouch>(_v: P0): R;
  }
  namespace classes {
    export interface NSFunctionRowActionTracker<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSFunctionRowActionTracker>(): R;
      new: <R = NSFunctionRowActionTracker>() => R;
      _frameForElement<R = cocoa.CGRect, P0 = unknown>(__frameForElement: P0): R;
      _titleForElement<R = unknown, P0 = unknown>(__titleForElement: P0): R;
    }
  }
}

declare const NSFunctionRowActionTracker: cocoa.classes.NSFunctionRowActionTracker;
