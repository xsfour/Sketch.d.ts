/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSAutomaticFocusRingState<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    nilFocusTime<R = number>(): R;
    setNilFocusTime<R = void, P0 = number>(_v: P0): R;
    lastNonNilFocusRingView<R = cocoa.NSView>(): R;
    setLastNonNilFocusRingView<R = void, P0 = cocoa.NSView>(_v: P0): R;
    alreadyFocusedWindow<R = cocoa.NSValue>(): R;
    setAlreadyFocusedWindow<R = void, P0 = cocoa.NSValue>(_v: P0): R;
    animatedFocusRingBounds<R = cocoa.CGRect>(): R;
    setAnimatedFocusRingBounds<R = void, P0 = cocoa.CGRect>(_v: P0): R;
    animationTimer<R = cocoa.NSTimer>(): R;
    setAnimationTimer<R = void, P0 = cocoa.NSTimer>(_v: P0): R;
    focusRingAnimationStartTime<R = number>(): R;
    setFocusRingAnimationStartTime<R = void, P0 = number>(_v: P0): R;
    previousActiveFirstResponder<R = cocoa.NSResponder>(): R;
    setPreviousActiveFirstResponder<R = void, P0 = cocoa.NSResponder>(_v: P0): R;
    automaticFocusRingLayer<R = cocoa.CALayer>(): R;
    setAutomaticFocusRingLayer<R = void, P0 = cocoa.CALayer>(_v: P0): R;
    automaticFocusRingRegion<R = cocoa.NSRegion>(): R;
    setAutomaticFocusRingRegion<R = void, P0 = cocoa.NSRegion>(_v: P0): R;
    automaticFocusRingWindowRect<R = cocoa.CGRect>(): R;
    setAutomaticFocusRingWindowRect<R = void, P0 = cocoa.CGRect>(_v: P0): R;
    automaticFocusRingBitmap<R = cocoa.NSBitmapImageRep>(): R;
    setAutomaticFocusRingBitmap<R = void, P0 = cocoa.NSBitmapImageRep>(_v: P0): R;
    automaticFocusRingView<R = cocoa.NSView>(): R;
    setAutomaticFocusRingView<R = void, P0 = cocoa.NSView>(_v: P0): R;
    automaticFocusRingNeedsUpdate<R = boolean>(): R;
    setAutomaticFocusRingNeedsUpdate<R = void, P0 = boolean>(_v: P0): R;
    automaticFocusRingShown<R = boolean>(): R;
    setAutomaticFocusRingShown<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface _NSAutomaticFocusRingState<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSAutomaticFocusRingState>(): R;
      new: <R = _NSAutomaticFocusRingState>() => R;
    }
  }
}
