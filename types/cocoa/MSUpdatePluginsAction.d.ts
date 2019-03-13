/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSUpdatePluginsAction<T = any> extends MSDocumentAction, MSWindowBadgeActionProtocol {
    label<R = unknown>(): R;
    numberOfBadges<R = number>(): R;
    badgeTint<R = NSColor>(): R;
    badgeTitle<R = NSAttributedString>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSUpdatePluginsAction<T = any> extends MSDocumentAction, MSWindowBadgeActionProtocol {
      alloc<R = MSUpdatePluginsAction>(): R;
      new: <R = MSUpdatePluginsAction>() => R;
    }
  }
}

declare const MSUpdatePluginsAction: cocoa.classes.MSUpdatePluginsAction;
