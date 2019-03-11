/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAlphaComponentModifier<T = any> extends cocoa.NSObject, cocoa.NSDynamicColorModifierProtocol {
    initWithAlphaComponent<R = unknown, P0 = number>(_initWithAlphaComponent: P0): R;
    alphaComponent<R = number>(): R;
    setAlphaComponent<R = void, P0 = number>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSAlphaComponentModifier<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSDynamicColorModifierProtocol {
      alloc<R = NSAlphaComponentModifier>(): R;
      new: <R = NSAlphaComponentModifier>() => R;
    }
  }
}

declare const NSAlphaComponentModifier: cocoa.classes.NSAlphaComponentModifier;
