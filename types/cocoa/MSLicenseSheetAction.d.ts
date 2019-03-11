/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLicenseSheetAction<T = any> extends cocoa.MSDocumentAction, cocoa.MSWindowBadgeActionProtocol {
    validate<R = boolean>(): R;
    label<R = unknown>(): R;
    hasDynamicTitle<R = boolean>(): R;
    runLicenseDialog<R = void, P0 = unknown>(_runLicenseDialog: P0): R;
    numberOfBadges<R = number>(): R;
    badgeTint<R = cocoa.NSColor>(): R;
    badgeTitle<R = cocoa.NSAttributedString>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSLicenseSheetAction<T = any> extends cocoa.classes.MSDocumentAction, cocoa.classes.MSWindowBadgeActionProtocol {
      alloc<R = MSLicenseSheetAction>(): R;
      new: <R = MSLicenseSheetAction>() => R;
    }
  }
}

declare const MSLicenseSheetAction: cocoa.classes.MSLicenseSheetAction;
