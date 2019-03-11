/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAlphaThresholdColorModifier<T = any> extends cocoa.NSObject, cocoa.NSDynamicColorModifierProtocol {
    dealloc<R = void>(): R;
    initWithAlphaThreshold_belowThresholdColor_aboveThresholdColor<R = unknown, P0 = number, P1 = unknown, P2 = unknown>(_initWithAlphaThreshold: P0, _belowThresholdColor: P1, _aboveThresholdColor: P2): R;
    aboveThresholdColor<R = cocoa.NSColor>(): R;
    setAboveThresholdColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    belowThresholdColor<R = cocoa.NSColor>(): R;
    setBelowThresholdColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    alphaThreshold<R = number>(): R;
    setAlphaThreshold<R = void, P0 = number>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSAlphaThresholdColorModifier<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSDynamicColorModifierProtocol {
      alloc<R = NSAlphaThresholdColorModifier>(): R;
      new: <R = NSAlphaThresholdColorModifier>() => R;
    }
  }
}

declare const NSAlphaThresholdColorModifier: cocoa.classes.NSAlphaThresholdColorModifier;
