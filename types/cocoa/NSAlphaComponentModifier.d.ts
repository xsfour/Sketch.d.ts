/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAlphaComponentModifier<T = any> extends NSObject, NSDynamicColorModifierProtocol {
    initWithAlphaComponent<R = unknown, P0 = number>(_initWithAlphaComponent: P0): R;
    alphaComponent<R = number>(): R;
    setAlphaComponent<R = void, P0 = number>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSAlphaComponentModifier<T = any> extends NSObject, NSDynamicColorModifierProtocol {
      alloc<R = NSAlphaComponentModifier>(): R;
      new: <R = NSAlphaComponentModifier>() => R;
    }
  }
}

declare const NSAlphaComponentModifier: cocoa.classes.NSAlphaComponentModifier;
