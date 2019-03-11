/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorAppearanceTintedModifier<T = any> extends cocoa.NSObject, cocoa.NSDynamicColorModifierProtocol {
    dealloc<R = void>(): R;
    initWithCatalogColorName<R = unknown, P0 = unknown>(_initWithCatalogColorName: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSColorAppearanceTintedModifier<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSDynamicColorModifierProtocol {
      alloc<R = NSColorAppearanceTintedModifier>(): R;
      new: <R = NSColorAppearanceTintedModifier>() => R;
      selectionModifier<R = unknown>(): R;
      textHighlightModifier<R = unknown>(): R;
      focusIndicatorModifier<R = unknown>(): R;
    }
  }
}

declare const NSColorAppearanceTintedModifier: cocoa.classes.NSColorAppearanceTintedModifier;
