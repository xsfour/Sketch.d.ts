/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAppearanceAuxiliary<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    allowsCustomTintColors<R = boolean>(): R;
    setAllowsCustomTintColors<R = void, P0 = boolean>(_v: P0): R;
    allowsSystemTintColors<R = boolean>(): R;
    setAllowsSystemTintColors<R = void, P0 = boolean>(_v: P0): R;
    colorTemperature<R = number>(): R;
    setColorTemperature<R = void, P0 = number>(_v: P0): R;
    glyphBrightness<R = number>(): R;
    setGlyphBrightness<R = void, P0 = number>(_v: P0): R;
    bezelBrightness<R = number>(): R;
    setBezelBrightness<R = void, P0 = number>(_v: P0): R;
    supportsBrightnessAdjustments<R = boolean>(): R;
    setSupportsBrightnessAdjustments<R = void, P0 = boolean>(_v: P0): R;
    supportsWhitePointAdjustments<R = boolean>(): R;
    setSupportsWhitePointAdjustments<R = void, P0 = boolean>(_v: P0): R;
    tintColor<R = cocoa.NSColor>(): R;
    setTintColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    defaultBlendMode<R = number>(): R;
    setDefaultBlendMode<R = void, P0 = number>(_v: P0): R;
    allowsVibrancy<R = boolean>(): R;
    setAllowsVibrancy<R = void, P0 = boolean>(_v: P0): R;
    preventArchiving<R = boolean>(): R;
    setPreventArchiving<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface NSAppearanceAuxiliary<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSAppearanceAuxiliary>(): R;
      new: <R = NSAppearanceAuxiliary>() => R;
    }
  }
}

declare const NSAppearanceAuxiliary: cocoa.classes.NSAppearanceAuxiliary;
