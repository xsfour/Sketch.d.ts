/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWindowBadgeActionProtocol<T = any> extends NSObjectProtocol {
    badgeTint<R = NSColor>(): R;
    badgeTitle<R = NSAttributedString>(): R;
    numberOfBadges<R = number>(): R;
  }
  namespace classes {
    export interface MSWindowBadgeActionProtocol<T = any> extends NSObjectProtocol {  }
  }
}
