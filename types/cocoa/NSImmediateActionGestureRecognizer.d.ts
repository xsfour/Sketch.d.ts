/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSImmediateActionGestureRecognizer<T = any> extends cocoa.NSGestureRecognizer {
    _startEvent<R = unknown>(): R;
    _forceClickMonitor<R = unknown>(): R;
    animationProgress<R = number>(): R;
    setAnimationController<R = void, P0 = unknown>(_setAnimationController: P0): R;
    animationController<R = unknown>(): R;
    setDelegate<R = void, P0 = unknown>(_setDelegate: P0): R;
    _delegate<R = unknown>(): R;
    delegate<R = unknown>(): R;
    setStyle<R = void, P0 = number>(_setStyle: P0): R;
    style<R = number>(): R;
  }
  namespace classes {
    export interface NSImmediateActionGestureRecognizer<T = any> extends cocoa.classes.NSGestureRecognizer {
      alloc<R = NSImmediateActionGestureRecognizer>(): R;
      new: <R = NSImmediateActionGestureRecognizer>() => R;
    }
  }
}

declare const NSImmediateActionGestureRecognizer: cocoa.classes.NSImmediateActionGestureRecognizer;
