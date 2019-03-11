/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCalibratedRGBColor<T = any> extends cocoa.NSColor {
    encodeWithCoder_colorSpaceCode<R = void, P0 = unknown, P1 = boolean>(_encodeWithCoder: P0, _colorSpaceCode: P1): R;
    classForCoder<R = unknown>(): R;
    hash<R = number>(): R;
    description<R = unknown>(): R;
    colorSpace<R = unknown>(): R;
    type<R = number>(): R;
    CGColor<R = cocoa.CGColor>(): R;
    _createCGColorWithAlpha<R = cocoa.CGColor, P0 = number>(__createCGColorWithAlpha: P0): R;
    numberOfComponents<R = number>(): R;
    alphaComponent<R = number>(): R;
    brightnessComponent<R = number>(): R;
    saturationComponent<R = number>(): R;
    hueComponent<R = number>(): R;
    blueComponent<R = number>(): R;
    greenComponent<R = number>(): R;
    redComponent<R = number>(): R;
    dealloc<R = void>(): R;
    initWithRed_green_blue_alpha<R = unknown, P0 = number, P1 = number, P2 = number, P3 = number>(_initWithRed: P0, _green: P1, _blue: P2, _alpha: P3): R;
    initWithHue_saturation_brightness_alpha<R = unknown, P0 = number, P1 = number, P2 = number, P3 = number>(_initWithHue: P0, _saturation: P1, _brightness: P2, _alpha: P3): R;
  }
  namespace classes {
    export interface NSCalibratedRGBColor<T = any> extends cocoa.classes.NSColor {
      alloc<R = NSCalibratedRGBColor>(): R;
      new: <R = NSCalibratedRGBColor>() => R;
      _cachedLookupWithRed_green_blue_alpha<R = unknown, P0 = number, P1 = number, P2 = number, P3 = number>(__cachedLookupWithRed: P0, _green: P1, _blue: P2, _alpha: P3): R;
      newWithCoder_zone<R = unknown, P0 = unknown, P1 = cocoa._NSZone>(_newWithCoder: P0, _zone: P1): R;
    }
  }
}

declare const NSCalibratedRGBColor: cocoa.classes.NSCalibratedRGBColor;
