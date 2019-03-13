/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPreLibertyHighlightToSelectionColorModifier<T = any> extends NSObject, NSDynamicColorModifierProtocol {
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSPreLibertyHighlightToSelectionColorModifier<T = any> extends NSObject, NSDynamicColorModifierProtocol {
      alloc<R = NSPreLibertyHighlightToSelectionColorModifier>(): R;
      new: <R = NSPreLibertyHighlightToSelectionColorModifier>() => R;
      sharedInstance<R = unknown>(): R;
    }
  }
}

declare const NSPreLibertyHighlightToSelectionColorModifier: cocoa.classes.NSPreLibertyHighlightToSelectionColorModifier;
