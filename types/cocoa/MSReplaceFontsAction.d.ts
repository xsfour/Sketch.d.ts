/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSReplaceFontsAction<T = any> extends cocoa.MSDocumentAction, cocoa.MSWindowBadgeActionProtocol {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    replaceMissingFonts<R = void, P0 = unknown>(_replaceMissingFonts: P0): R;
    badgeTint<R = cocoa.NSColor>(): R;
    numberOfBadges<R = number>(): R;
    badgeTitle<R = cocoa.NSAttributedString>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSReplaceFontsAction<T = any> extends cocoa.classes.MSDocumentAction, cocoa.classes.MSWindowBadgeActionProtocol {
      alloc<R = MSReplaceFontsAction>(): R;
      new: <R = MSReplaceFontsAction>() => R;
    }
  }
}

declare const MSReplaceFontsAction: cocoa.classes.MSReplaceFontsAction;
