/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCoreUIImageRep<T = any> extends cocoa.NSImageRep {
    coreUIDrawOptions<R = cocoa.__CFDictionary>(): R;
    boundingRectWithExtraEffectsForState_backgroundStyle_context<R = cocoa.CGRect, P0 = number, P1 = number, P2 = unknown>(_boundingRectWithExtraEffectsForState: P0, _backgroundStyle: P1, _context: P2): R;
    setTemplate<R = void, P0 = boolean>(_setTemplate: P0): R;
    isTemplate<R = boolean>(): R;
    setCGImage<R = void, P0 = cocoa.CGImage>(_setCGImage: P0): R;
    initWithCGImage<R = unknown, P0 = cocoa.CGImage>(_initWithCGImage: P0): R;
    initWithCocoaName<R = unknown, P0 = unknown>(_initWithCocoaName: P0): R;
    initWithCoreUIDrawOptions_size<R = unknown, P0 = cocoa.__CFDictionary, P1 = cocoa.CGSize>(_initWithCoreUIDrawOptions: P0, _size: P1): R;
    suppressesCache<R = boolean>(): R;
    setSuppressesCache<R = void, P0 = boolean>(_v: P0): R;
    backgroundStyle<R = number>(): R;
    setBackgroundStyle<R = void, P0 = number>(_v: P0): R;
    tintColor<R = cocoa.CGColor>(): R;
    setTintColor<R = void, P0 = cocoa.CGColor>(_v: P0): R;
    state<R = number>(): R;
    setState<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface NSCoreUIImageRep<T = any> extends cocoa.classes.NSImageRep {
      alloc<R = NSCoreUIImageRep>(): R;
      new: <R = NSCoreUIImageRep>() => R;
      imageRepWithCGImage<R = unknown, P0 = cocoa.CGImage>(_imageRepWithCGImage: P0): R;
      imageRepWithCocoaName<R = unknown, P0 = unknown>(_imageRepWithCocoaName: P0): R;
    }
  }
}

declare const NSCoreUIImageRep: cocoa.classes.NSCoreUIImageRep;
