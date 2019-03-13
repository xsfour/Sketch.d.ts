/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocumentControllerSubMenuDelegate<T = any> extends NSObject, NSMenuDelegateProtocol {
    updateMenu_withEvent_withFlags<R = boolean, P0 = unknown, P1 = unknown, P2 = number>(_updateMenu: P0, _withEvent: P1, _withFlags: P2): R;
    initWithController<R = unknown, P0 = unknown>(_initWithController: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSDocumentControllerSubMenuDelegate<T = any> extends NSObject, NSMenuDelegateProtocol {
      alloc<R = NSDocumentControllerSubMenuDelegate>(): R;
      new: <R = NSDocumentControllerSubMenuDelegate>() => R;
    }
  }
}

declare const NSDocumentControllerSubMenuDelegate: cocoa.classes.NSDocumentControllerSubMenuDelegate;
