/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorAppearanceTintedModifier<T = any> extends NSObject, NSDynamicColorModifierProtocol {
    dealloc<R = void>(): R;
    initWithCatalogColorName<R = unknown, P0 = unknown>(_initWithCatalogColorName: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSColorAppearanceTintedModifier<T = any> extends NSObject, NSDynamicColorModifierProtocol {
      alloc<R = NSColorAppearanceTintedModifier>(): R;
      new: <R = NSColorAppearanceTintedModifier>() => R;
      selectionModifier<R = unknown>(): R;
      textHighlightModifier<R = unknown>(): R;
      focusIndicatorModifier<R = unknown>(): R;
    }
  }
}

declare const NSColorAppearanceTintedModifier: cocoa.classes.NSColorAppearanceTintedModifier;
