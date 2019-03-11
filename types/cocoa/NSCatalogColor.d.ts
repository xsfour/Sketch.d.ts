/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCatalogColor<T = any> extends cocoa.NSColor {
    dealloc<R = void>(): R;
    hash<R = number>(): R;
    classForCoder<R = unknown>(): R;
    description<R = unknown>(): R;
    localizedColorNameComponent<R = unknown>(): R;
    localizedCatalogNameComponent<R = unknown>(): R;
    colorNameComponent<R = unknown>(): R;
    catalogNameComponent<R = unknown>(): R;
    type<R = number>(): R;
    alphaComponent<R = number>(): R;
    drawSwatchOfColor_inRect<R = void, P0 = unknown, P1 = cocoa.CGRect>(_drawSwatchOfColor: P0, _inRect: P1): R;
    _createCGColorWithAlpha<R = cocoa.CGColor, P0 = number>(__createCGColorWithAlpha: P0): R;
    CGColor<R = cocoa.CGColor>(): R;
    initWithCatalogName_colorName_genericColor<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithCatalogName: P0, _colorName: P1, _genericColor: P2): R;
  }
  namespace classes {
    export interface NSCatalogColor<T = any> extends cocoa.classes.NSColor {
      alloc<R = NSCatalogColor>(): R;
      new: <R = NSCatalogColor>() => R;
      newWithCoder_zone<R = unknown, P0 = unknown, P1 = cocoa._NSZone>(_newWithCoder: P0, _zone: P1): R;
    }
  }
}

declare const NSCatalogColor: cocoa.classes.NSCatalogColor;
