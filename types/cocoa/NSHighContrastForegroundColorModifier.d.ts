/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSHighContrastForegroundColorModifier<T = any> extends NSObject, NSDynamicColorModifierProtocol {
    initWithLuminanceThreshold<R = unknown, P0 = number>(_initWithLuminanceThreshold: P0): R;
    luminanceThreshold<R = number>(): R;
    setLuminanceThreshold<R = void, P0 = number>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSHighContrastForegroundColorModifier<T = any> extends NSObject, NSDynamicColorModifierProtocol {
      alloc<R = NSHighContrastForegroundColorModifier>(): R;
      new: <R = NSHighContrastForegroundColorModifier>() => R;
    }
  }
}

declare const NSHighContrastForegroundColorModifier: cocoa.classes.NSHighContrastForegroundColorModifier;
