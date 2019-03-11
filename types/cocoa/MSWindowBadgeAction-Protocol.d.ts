/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWindowBadgeActionProtocol<T = any> extends cocoa.NSObjectProtocol {
    badgeTint<R = cocoa.NSColor>(): R;
    badgeTitle<R = cocoa.NSAttributedString>(): R;
    numberOfBadges<R = number>(): R;
  }
  namespace classes {
    export interface MSWindowBadgeActionProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSWindowBadgeActionProtocol: cocoa.classes.MSWindowBadgeActionProtocol;
