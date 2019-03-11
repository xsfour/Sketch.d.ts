/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInsertSharedTextAction<T = any> extends cocoa.MSSharedObjectAction, cocoa.NSMenuDelegateProtocol {
    tooltip<R = unknown>(): R;
    label<R = unknown>(): R;
    sharedObjectName<R = unknown>(): R;
    imageForToolbar<R = unknown>(): R;
    validate<R = boolean>(): R;
    showSharedObjectsSheet<R = void, P0 = unknown>(_showSharedObjectsSheet: P0): R;
    menuBuilder<R = cocoa.MSForeignObjectMenuBuilder>(): R;
    setMenuBuilder<R = void, P0 = cocoa.MSForeignObjectMenuBuilder>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSInsertSharedTextAction<T = any> extends cocoa.classes.MSSharedObjectAction, cocoa.classes.NSMenuDelegateProtocol {
      alloc<R = MSInsertSharedTextAction>(): R;
      new: <R = MSInsertSharedTextAction>() => R;
    }
  }
}

declare const MSInsertSharedTextAction: cocoa.classes.MSInsertSharedTextAction;
