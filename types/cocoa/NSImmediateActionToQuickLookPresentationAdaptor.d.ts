/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSImmediateActionToQuickLookPresentationAdaptor<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    _forceClickMonitorDidChange<R = void, P0 = unknown>(__forceClickMonitorDidChange: P0): R;
    _startEvent<R = unknown>(): R;
    _forceClickMonitor<R = unknown>(): R;
    locationInView<R = CGPoint, P0 = unknown>(_locationInView: P0): R;
    _presentWithQuickLookEvent<R = void, P0 = unknown>(__presentWithQuickLookEvent: P0): R;
    presentQuickLookInView<R = void, P0 = unknown>(_presentQuickLookInView: P0): R;
    cancel<R = void>(): R;
    _reset<R = void>(): R;
    _halfReset<R = void>(): R;
    state<R = number>(): R;
    dealloc<R = void>(): R;
    _delegate<R = unknown>(): R;
    view<R = NSView>(): R;
    setView<R = void, P0 = NSView>(_v: P0): R;
    delegate<R = NSImmediateActionGestureRecognizerDelegate>(): R;
    setDelegate<R = void, P0 = NSImmediateActionGestureRecognizerDelegate>(_v: P0): R;
    presentationState<R = number>(): R;
    setPresentationState<R = void, P0 = number>(_v: P0): R;
    animationController<R = NSImmediateActionAnimationController>(): R;
    setAnimationController<R = void, P0 = NSImmediateActionAnimationController>(_v: P0): R;
    modifierFlags<R = number>(): R;
    animationProgress<R = number>(): R;
  }
  namespace classes {
    export interface NSImmediateActionToQuickLookPresentationAdaptor<T = any> extends NSObject {
      alloc<R = NSImmediateActionToQuickLookPresentationAdaptor>(): R;
      new: <R = NSImmediateActionToQuickLookPresentationAdaptor>() => R;
      isForceClickPossibleFromEvent<R = boolean, P0 = unknown>(_isForceClickPossibleFromEvent: P0): R;
    }
  }
}

declare const NSImmediateActionToQuickLookPresentationAdaptor: cocoa.classes.NSImmediateActionToQuickLookPresentationAdaptor;
