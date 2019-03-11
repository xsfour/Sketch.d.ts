/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDynamicSystemColor<T = any> extends cocoa.NSDynamicNamedColor {
    retainWeakReference<R = boolean>(): R;
    allowsWeakReference<R = boolean>(): R;
    resolvedColor<R = unknown>(): R;
    recacheColor<R = void>(): R;
    initWithSelector_tintedWithColor<R = unknown, P0 = string, P1 = unknown>(_initWithSelector: P0, _tintedWithColor: P1): R;
    initWithSelector<R = unknown, P0 = string>(_initWithSelector: P0): R;
  }
  namespace classes {
    export interface NSDynamicSystemColor<T = any> extends cocoa.classes.NSDynamicNamedColor {
      alloc<R = NSDynamicSystemColor>(): R;
      new: <R = NSDynamicSystemColor>() => R;
      alternateSecondarySelectedControlColor<R = unknown>(): R;
      recacheAllColors<R = void, P0 = unknown>(_recacheAllColors: P0): R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSDynamicSystemColor: cocoa.classes.NSDynamicSystemColor;
