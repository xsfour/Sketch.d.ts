/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBadgeMenuAction<T = any> extends MSDocumentAction, MSWindowBadgeActionProtocol {
    label<R = unknown>(): R;
    badgedActions<R = unknown>(): R;
    buildMenu<R = unknown>(): R;
    numberOfBadges<R = number>(): R;
    badgeTint<R = NSColor>(): R;
    badgeTitle<R = NSAttributedString>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSBadgeMenuAction<T = any> extends MSDocumentAction, MSWindowBadgeActionProtocol {
      alloc<R = MSBadgeMenuAction>(): R;
      new: <R = MSBadgeMenuAction>() => R;
    }
  }
}

declare const MSBadgeMenuAction: cocoa.classes.MSBadgeMenuAction;
