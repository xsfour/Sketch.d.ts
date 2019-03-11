/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarItemAttributes<T = any> extends cocoa.NSObject {
    description<R = unknown>(): R;
    zPosition<R = number>(): R;
    setZPosition<R = void, P0 = number>(_v: P0): R;
    alphaValue<R = number>(): R;
    setAlphaValue<R = void, P0 = number>(_v: P0): R;
    frame<R = cocoa.CGRect>(): R;
    setFrame<R = void, P0 = cocoa.CGRect>(_v: P0): R;
  }
  namespace classes {
    export interface NSTouchBarItemAttributes<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSTouchBarItemAttributes>(): R;
      new: <R = NSTouchBarItemAttributes>() => R;
    }
  }
}

declare const NSTouchBarItemAttributes: cocoa.classes.NSTouchBarItemAttributes;
