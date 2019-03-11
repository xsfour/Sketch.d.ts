/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStyleBasicFill<T = any> extends cocoa._MSStyleBasicFill, cocoa.MSColorConvertibleProtocol {
    previewImageOfSize_colorSpace_clippingAsBorder_borderWidth<R = unknown, P0 = cocoa.CGSize, P1 = unknown, P2 = boolean, P3 = number>(_previewImageOfSize: P0, _colorSpace: P1, _clippingAsBorder: P2, _borderWidth: P3): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSStyleBasicFill<T = any> extends cocoa.classes._MSStyleBasicFill, cocoa.classes.MSColorConvertibleProtocol {
      alloc<R = MSStyleBasicFill>(): R;
      new: <R = MSStyleBasicFill>() => R;
      defaultFillColor<R = unknown>(): R;
      drawNoiseFill_inRect_context<R = void, P0 = unknown, P1 = cocoa.CGRect, P2 = cocoa.CGContext>(_drawNoiseFill: P0, _inRect: P1, _context: P2): R;
      drawPatternFill_inRect<R = void, P0 = unknown, P1 = cocoa.CGRect>(_drawPatternFill: P0, _inRect: P1): R;
      drawGradientFill_colorSpace_inRect<R = void, P0 = unknown, P1 = unknown, P2 = cocoa.CGRect>(_drawGradientFill: P0, _colorSpace: P1, _inRect: P2): R;
      drawColorFill_colorSpace_inRect<R = void, P0 = unknown, P1 = unknown, P2 = cocoa.CGRect>(_drawColorFill: P0, _colorSpace: P1, _inRect: P2): R;
      drawColor_enabled_inRect_checkerboardSize_forDarkAppearance<R = void, P0 = unknown, P1 = boolean, P2 = cocoa.CGRect, P3 = number, P4 = boolean>(_drawColor: P0, _enabled: P1, _inRect: P2, _checkerboardSize: P3, _forDarkAppearance: P4): R;
      drawColor_enabled_inRect<R = void, P0 = unknown, P1 = boolean, P2 = cocoa.CGRect>(_drawColor: P0, _enabled: P1, _inRect: P2): R;
      drawBasicFill_colorSpace_enabled_inRect<R = void, P0 = unknown, P1 = unknown, P2 = boolean, P3 = cocoa.CGRect>(_drawBasicFill: P0, _colorSpace: P1, _enabled: P2, _inRect: P3): R;
      drawCheckerboardBackgroundInRect_checkerboardSize_forDarkAppearance_backgroundColor<R = void, P0 = cocoa.CGRect, P1 = number, P2 = boolean, P3 = unknown>(_drawCheckerboardBackgroundInRect: P0, _checkerboardSize: P1, _forDarkAppearance: P2, _backgroundColor: P3): R;
      drawCheckerboardBackgroundInRect<R = void, P0 = cocoa.CGRect>(_drawCheckerboardBackgroundInRect: P0): R;
    }
  }
}

declare const MSStyleBasicFill: cocoa.classes.MSStyleBasicFill;
