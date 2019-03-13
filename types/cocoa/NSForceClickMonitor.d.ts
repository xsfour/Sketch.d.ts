/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSForceClickMonitor<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    pressureChangeWithEvent<R = void, P0 = unknown>(_pressureChangeWithEvent: P0): R;
    mouseUp<R = void, P0 = unknown>(_mouseUp: P0): R;
    mouseDragged<R = void, P0 = unknown>(_mouseDragged: P0): R;
    mouseDown<R = void, P0 = unknown>(_mouseDown: P0): R;
    firstMouseEvent<R = void, P0 = unknown>(_firstMouseEvent: P0): R;
    sendEvent<R = void, P0 = unknown>(_sendEvent: P0): R;
    cancel<R = void>(): R;
    location<R = CGPoint>(): R;
    initWithEvent<R = unknown, P0 = unknown>(_initWithEvent: P0): R;
    _initWithEvent_ignoreForceClickSystemPreferences<R = unknown, P0 = unknown, P1 = boolean>(__initWithEvent: P0, _ignoreForceClickSystemPreferences: P1): R;
    allowableMovement<R = number>(): R;
    setAllowableMovement<R = void, P0 = number>(_v: P0): R;
    action<R = string>(): R;
    setAction<R = void, P0 = string>(_v: P0): R;
    target<R = unknown>(): R;
    setTarget<R = void, P0 = unknown>(_v: P0): R;
    progress<R = number>(): R;
    setProgress<R = void, P0 = number>(_v: P0): R;
    state<R = number>(): R;
    setState<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface NSForceClickMonitor<T = any> extends NSObject {
      alloc<R = NSForceClickMonitor>(): R;
      new: <R = NSForceClickMonitor>() => R;
      forceClickUserPreferencesEnabled<R = boolean>(): R;
      _forceClickPossibleFromEvent_respectUserPreferences<R = boolean, P0 = unknown, P1 = boolean>(__forceClickPossibleFromEvent: P0, _respectUserPreferences: P1): R;
      _lookupStyleSettingDidChangeNotification<R = void, P0 = unknown>(__lookupStyleSettingDidChangeNotification: P0): R;
    }
  }
}

declare const NSForceClickMonitor: cocoa.classes.NSForceClickMonitor;
