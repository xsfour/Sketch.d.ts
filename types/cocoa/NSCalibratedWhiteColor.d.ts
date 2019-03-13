/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCalibratedWhiteColor<T = any> extends NSColor {
    encodeWithCoder_colorSpaceCode<R = void, P0 = unknown, P1 = boolean>(_encodeWithCoder: P0, _colorSpaceCode: P1): R;
    classForCoder<R = unknown>(): R;
    hash<R = number>(): R;
    description<R = unknown>(): R;
    colorSpace<R = unknown>(): R;
    type<R = number>(): R;
    CGColor<R = CGColor>(): R;
    _createCGColorWithAlpha<R = CGColor, P0 = number>(__createCGColorWithAlpha: P0): R;
    numberOfComponents<R = number>(): R;
    alphaComponent<R = number>(): R;
    whiteComponent<R = number>(): R;
    dealloc<R = void>(): R;
    initWithWhite_alpha<R = unknown, P0 = number, P1 = number>(_initWithWhite: P0, _alpha: P1): R;
  }
  namespace classes {
    export interface NSCalibratedWhiteColor<T = any> extends NSColor {
      alloc<R = NSCalibratedWhiteColor>(): R;
      new: <R = NSCalibratedWhiteColor>() => R;
      _cachedLookupWithWhite_alpha<R = unknown, P0 = number, P1 = number>(__cachedLookupWithWhite: P0, _alpha: P1): R;
      newWithCoder_zone<R = unknown, P0 = unknown, P1 = _NSZone>(_newWithCoder: P0, _zone: P1): R;
    }
  }
}

declare const NSCalibratedWhiteColor: cocoa.classes.NSCalibratedWhiteColor;
