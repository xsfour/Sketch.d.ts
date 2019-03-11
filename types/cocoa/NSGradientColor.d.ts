/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSGradientColor<T = any> extends cocoa.NSColor {
    CGColor<R = cocoa.CGColor>(): R;
    hash<R = number>(): R;
    description<R = unknown>(): R;
    type<R = number>(): R;
    _updatePattern<R = void>(): R;
    _updatePatternImage<R = void>(): R;
    dealloc<R = void>(): R;
    initWithGradient<R = unknown, P0 = unknown>(_initWithGradient: P0): R;
  }
  namespace classes {
    export interface NSGradientColor<T = any> extends cocoa.classes.NSColor {
      alloc<R = NSGradientColor>(): R;
      new: <R = NSGradientColor>() => R;
    }
  }
}

declare const NSGradientColor: cocoa.classes.NSGradientColor;
