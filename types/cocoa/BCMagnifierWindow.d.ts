/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCMagnifierWindow<T = any> extends cocoa.NSWindow {
    setCurrentColor<R = void, P0 = unknown>(_setCurrentColor: P0): R;
    updateScreenGrabIfNeeded<R = void, P0 = unknown>(_updateScreenGrabIfNeeded: P0): R;
    mouseMovedTo<R = void, P0 = cocoa.CGPoint>(_mouseMovedTo: P0): R;
    initWithScreenGrab_frameOffset<R = unknown, P0 = unknown, P1 = cocoa.CGPoint>(_initWithScreenGrab: P0, _frameOffset: P1): R;
    frameForWindowAroundMouse<R = cocoa.CGRect>(): R;
    screenFrame<R = cocoa.CGRect>(): R;
    setScreenFrame<R = void, P0 = cocoa.CGRect>(_v: P0): R;
    frameOffset<R = cocoa.CGPoint>(): R;
  }
  namespace classes {
    export interface BCMagnifierWindow<T = any> extends cocoa.classes.NSWindow {
      alloc<R = BCMagnifierWindow>(): R;
      new: <R = BCMagnifierWindow>() => R;
    }
  }
}

declare const BCMagnifierWindow: cocoa.classes.BCMagnifierWindow;
