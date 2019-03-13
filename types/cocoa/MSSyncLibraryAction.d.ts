/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSyncLibraryAction<T = any> extends MSDocumentAction, MSWindowBadgeActionProtocol {
    label<R = unknown>(): R;
    areForeignObjectsOutOfDate<R = boolean>(): R;
    numberOfBadges<R = number>(): R;
    badgeTint<R = NSColor>(): R;
    badgeTitle<R = NSAttributedString>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSSyncLibraryAction<T = any> extends MSDocumentAction, MSWindowBadgeActionProtocol {
      alloc<R = MSSyncLibraryAction>(): R;
      new: <R = MSSyncLibraryAction>() => R;
    }
  }
}

declare const MSSyncLibraryAction: cocoa.classes.MSSyncLibraryAction;
