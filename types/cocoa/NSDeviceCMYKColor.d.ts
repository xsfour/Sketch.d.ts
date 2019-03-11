/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDeviceCMYKColor<T = any> extends cocoa.NSColor {
    classForCoder<R = unknown>(): R;
    hash<R = number>(): R;
    description<R = unknown>(): R;
    colorSpace<R = unknown>(): R;
    type<R = number>(): R;
    CGColor<R = cocoa.CGColor>(): R;
    _createCGColorWithAlpha<R = cocoa.CGColor, P0 = number>(__createCGColorWithAlpha: P0): R;
    numberOfComponents<R = number>(): R;
    alphaComponent<R = number>(): R;
    blackComponent<R = number>(): R;
    yellowComponent<R = number>(): R;
    magentaComponent<R = number>(): R;
    cyanComponent<R = number>(): R;
    dealloc<R = void>(): R;
    initWithCyan_magenta_yellow_black_alpha<R = unknown, P0 = number, P1 = number, P2 = number, P3 = number, P4 = number>(_initWithCyan: P0, _magenta: P1, _yellow: P2, _black: P3, _alpha: P4): R;
  }
  namespace classes {
    export interface NSDeviceCMYKColor<T = any> extends cocoa.classes.NSColor {
      alloc<R = NSDeviceCMYKColor>(): R;
      new: <R = NSDeviceCMYKColor>() => R;
      newWithCoder_zone<R = unknown, P0 = unknown, P1 = cocoa._NSZone>(_newWithCoder: P0, _zone: P1): R;
    }
  }
}

declare const NSDeviceCMYKColor: cocoa.classes.NSDeviceCMYKColor;
