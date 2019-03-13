/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSAppearanceCustomizationProxy<T = any> extends NSObject, NSAppearanceCustomizationProtocol {
    dealloc<R = void>(): R;
    initWithAppearance<R = unknown, P0 = unknown>(_initWithAppearance: P0): R;
    appearance<R = NSAppearance>(): R;
    setAppearance<R = void, P0 = NSAppearance>(_v: P0): R;
    effectiveAppearance<R = NSAppearance>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSAppearanceCustomizationProxy<T = any> extends NSObject, NSAppearanceCustomizationProtocol {
      alloc<R = _NSAppearanceCustomizationProxy>(): R;
      new: <R = _NSAppearanceCustomizationProxy>() => R;
      keyPathsForValuesAffectingEffectiveAppearance<R = unknown>(): R;
    }
  }
}
