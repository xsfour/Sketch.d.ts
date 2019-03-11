/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTitlebarThemeFrame<T = any> extends cocoa.NSThemeFrame {
    _shadowRect<R = cocoa.CGRect>(): R;
    _ensureShadowImage<R = void>(): R;
    shadowAlpha<R = number>(): R;
    setShadowAlpha<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface NSTitlebarThemeFrame<T = any> extends cocoa.classes.NSThemeFrame {
      alloc<R = NSTitlebarThemeFrame>(): R;
      new: <R = NSTitlebarThemeFrame>() => R;
    }
  }
}

declare const NSTitlebarThemeFrame: cocoa.classes.NSTitlebarThemeFrame;
