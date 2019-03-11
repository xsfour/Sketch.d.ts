/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDynamicModifiedColor<T = any> extends cocoa.NSDynamicNamedColor {
    resolvedColor<R = unknown>(): R;
    initWithBaseColor_modifiers<R = unknown, P0 = unknown, P1 = unknown>(_initWithBaseColor: P0, _modifiers: P1): R;
  }
  namespace classes {
    export interface NSDynamicModifiedColor<T = any> extends cocoa.classes.NSDynamicNamedColor {
      alloc<R = NSDynamicModifiedColor>(): R;
      new: <R = NSDynamicModifiedColor>() => R;
    }
  }
}

declare const NSDynamicModifiedColor: cocoa.classes.NSDynamicModifiedColor;
