/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSAppearanceCustomizationProxy<T = any> extends cocoa.NSObject, cocoa.NSAppearanceCustomizationProtocol {
    dealloc<R = void>(): R;
    initWithAppearance<R = unknown, P0 = unknown>(_initWithAppearance: P0): R;
    appearance<R = cocoa.NSAppearance>(): R;
    setAppearance<R = void, P0 = cocoa.NSAppearance>(_v: P0): R;
    effectiveAppearance<R = cocoa.NSAppearance>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSAppearanceCustomizationProxy<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSAppearanceCustomizationProtocol {
      alloc<R = _NSAppearanceCustomizationProxy>(): R;
      new: <R = _NSAppearanceCustomizationProxy>() => R;
      keyPathsForValuesAffectingEffectiveAppearance<R = unknown>(): R;
    }
  }
}
