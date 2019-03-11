/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSyncLibraryAction<T = any> extends cocoa.MSDocumentAction, cocoa.MSWindowBadgeActionProtocol {
    label<R = unknown>(): R;
    areForeignObjectsOutOfDate<R = boolean>(): R;
    numberOfBadges<R = number>(): R;
    badgeTint<R = cocoa.NSColor>(): R;
    badgeTitle<R = cocoa.NSAttributedString>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSSyncLibraryAction<T = any> extends cocoa.classes.MSDocumentAction, cocoa.classes.MSWindowBadgeActionProtocol {
      alloc<R = MSSyncLibraryAction>(): R;
      new: <R = MSSyncLibraryAction>() => R;
    }
  }
}

declare const MSSyncLibraryAction: cocoa.classes.MSSyncLibraryAction;
