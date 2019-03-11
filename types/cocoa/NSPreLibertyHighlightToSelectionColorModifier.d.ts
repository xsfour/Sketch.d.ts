/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPreLibertyHighlightToSelectionColorModifier<T = any> extends cocoa.NSObject, cocoa.NSDynamicColorModifierProtocol {
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSPreLibertyHighlightToSelectionColorModifier<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSDynamicColorModifierProtocol {
      alloc<R = NSPreLibertyHighlightToSelectionColorModifier>(): R;
      new: <R = NSPreLibertyHighlightToSelectionColorModifier>() => R;
      sharedInstance<R = unknown>(): R;
    }
  }
}

declare const NSPreLibertyHighlightToSelectionColorModifier: cocoa.classes.NSPreLibertyHighlightToSelectionColorModifier;
