/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorSystemEffectModifier<T = any> extends NSObject, NSDynamicColorModifierProtocol {
    dealloc<R = void>(): R;
    initWithSystemEffect<R = unknown, P0 = number>(_initWithSystemEffect: P0): R;
    systemEffect<R = number>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSColorSystemEffectModifier<T = any> extends NSObject, NSDynamicColorModifierProtocol {
      alloc<R = NSColorSystemEffectModifier>(): R;
      new: <R = NSColorSystemEffectModifier>() => R;
      modifierForEffect<R = unknown, P0 = number>(_modifierForEffect: P0): R;
    }
  }
}

declare const NSColorSystemEffectModifier: cocoa.classes.NSColorSystemEffectModifier;
