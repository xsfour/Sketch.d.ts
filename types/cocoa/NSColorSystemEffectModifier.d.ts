/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorSystemEffectModifier<T = any> extends cocoa.NSObject, cocoa.NSDynamicColorModifierProtocol {
    dealloc<R = void>(): R;
    initWithSystemEffect<R = unknown, P0 = number>(_initWithSystemEffect: P0): R;
    systemEffect<R = number>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSColorSystemEffectModifier<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSDynamicColorModifierProtocol {
      alloc<R = NSColorSystemEffectModifier>(): R;
      new: <R = NSColorSystemEffectModifier>() => R;
      modifierForEffect<R = unknown, P0 = number>(_modifierForEffect: P0): R;
    }
  }
}

declare const NSColorSystemEffectModifier: cocoa.classes.NSColorSystemEffectModifier;
