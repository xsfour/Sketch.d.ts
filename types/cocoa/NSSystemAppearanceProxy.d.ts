/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSystemAppearanceProxy<T = any> extends cocoa.NSObject, cocoa.NSAppearanceCustomizationInternalProtocol, cocoa.NSAppearanceCustomizationProtocol {
    _menuBarAppearanceChanged<R = void, P0 = unknown>(__menuBarAppearanceChanged: P0): R;
    _increaseContrastChanged<R = void, P0 = unknown>(__increaseContrastChanged: P0): R;
    _controlTintChanged<R = void, P0 = unknown>(__controlTintChanged: P0): R;
    _menuBarAppearanceDidChange<R = void>(): R;
    _systemAppearanceDidChange<R = void>(): R;
    dealloc<R = void>(): R;
    _kitAppearance<R = unknown>(): R;
    menuBarProxy<R = cocoa.NSAppearanceCustomization>(): R;
    appearance<R = cocoa.NSAppearance>(): R;
    setAppearance<R = void, P0 = cocoa.NSAppearance>(_v: P0): R;
    effectiveAppearance<R = cocoa.NSAppearance>(): R;
    _effectiveAppearanceParent<R = cocoa.NSAppearanceCustomization>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSSystemAppearanceProxy<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSAppearanceCustomizationInternalProtocol, cocoa.classes.NSAppearanceCustomizationProtocol {
      alloc<R = NSSystemAppearanceProxy>(): R;
      new: <R = NSSystemAppearanceProxy>() => R;
      keyPathsForValuesAffectingEffectiveAppearance<R = unknown>(): R;
      systemProxy<R = unknown>(): R;
    }
  }
}

declare const NSSystemAppearanceProxy: cocoa.classes.NSSystemAppearanceProxy;
