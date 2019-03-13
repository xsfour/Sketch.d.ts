/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLicenseExpiredAction<T = any> extends MSDocumentAction, MSWindowBadgeActionProtocol {
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
    export interface MSLicenseExpiredAction<T = any> extends MSDocumentAction, MSWindowBadgeActionProtocol {
      alloc<R = MSLicenseExpiredAction>(): R;
      new: <R = MSLicenseExpiredAction>() => R;
    }
  }
}

declare const MSLicenseExpiredAction: cocoa.classes.MSLicenseExpiredAction;
