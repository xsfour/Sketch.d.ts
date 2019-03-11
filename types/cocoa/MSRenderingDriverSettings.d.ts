/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRenderingDriverSettings<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    flowColor<R = cocoa.CGColor>(): R;
    flowOtherPageImage<R = cocoa.CGImage>(): R;
    flowBackImage<R = cocoa.CGImage>(): R;
    flowTipImage<R = cocoa.CGImage>(): R;
    createTintedImageFromImage<R = cocoa.CGImage, P0 = cocoa.CGImage>(_createTintedImageFromImage: P0): R;
    initWithGridLightColor_gridDarkColor_layoutGridStyle_flowColor_flowTipImage_flowBackImage_flowOtherPageImage<R = unknown, P0 = cocoa.CGColor, P1 = cocoa.CGColor, P2 = number, P3 = cocoa.CGColor, P4 = cocoa.CGImage, P5 = cocoa.CGImage, P6 = cocoa.CGImage>(_initWithGridLightColor: P0, _gridDarkColor: P1, _layoutGridStyle: P2, _flowColor: P3, _flowTipImage: P4, _flowBackImage: P5, _flowOtherPageImage: P6): R;
    gridDarkColor<R = cocoa.CGColor>(): R;
    gridLightColor<R = cocoa.CGColor>(): R;
    layoutGridStyle<R = number>(): R;
  }
  namespace classes {
    export interface MSRenderingDriverSettings<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSRenderingDriverSettings>(): R;
      new: <R = MSRenderingDriverSettings>() => R;
    }
  }
}

declare const MSRenderingDriverSettings: cocoa.classes.MSRenderingDriverSettings;
