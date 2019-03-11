/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPatternColor<T = any> extends cocoa.NSColor {
    classForCoder<R = unknown>(): R;
    hash<R = number>(): R;
    patternImage<R = unknown>(): R;
    description<R = unknown>(): R;
    type<R = number>(): R;
    CGColor<R = cocoa.CGColor>(): R;
    _createCGColorWithAlpha<R = cocoa.CGColor, P0 = number>(__createCGColorWithAlpha: P0): R;
    dealloc<R = void>(): R;
    _initWithCGPatternColor<R = unknown, P0 = cocoa.CGColor>(__initWithCGPatternColor: P0): R;
    initWithImage<R = unknown, P0 = unknown>(_initWithImage: P0): R;
  }
  namespace classes {
    export interface NSPatternColor<T = any> extends cocoa.classes.NSColor {
      alloc<R = NSPatternColor>(): R;
      new: <R = NSPatternColor>() => R;
      newWithCoder_zone<R = unknown, P0 = unknown, P1 = cocoa._NSZone>(_newWithCoder: P0, _zone: P1): R;
    }
  }
}

declare const NSPatternColor: cocoa.classes.NSPatternColor;
