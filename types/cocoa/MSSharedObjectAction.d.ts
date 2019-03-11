/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSharedObjectAction<T = any> extends cocoa.MSDocumentAction, cocoa.NSMenuDelegateProtocol {
    hasSubMenu<R = boolean>(): R;
    noSharedObjectMenuItemForMenu<R = unknown, P0 = unknown>(_noSharedObjectMenuItemForMenu: P0): R;
    noSharedObjectsView<R = unknown>(): R;
    sortedObjectMenuItemsForMenu<R = unknown, P0 = unknown>(_sortedObjectMenuItemsForMenu: P0): R;
    sharedObjectName<R = cocoa.NSString>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSSharedObjectAction<T = any> extends cocoa.classes.MSDocumentAction, cocoa.classes.NSMenuDelegateProtocol {
      alloc<R = MSSharedObjectAction>(): R;
      new: <R = MSSharedObjectAction>() => R;
    }
  }
}

declare const MSSharedObjectAction: cocoa.classes.MSSharedObjectAction;
