/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSWindowMenuUpdater<T = any> extends cocoa.NSObject, cocoa.NSMenuDelegateProtocol {
    setMenuToUpdate<R = void, P0 = unknown>(_setMenuToUpdate: P0): R;
    initWithMenuToUpdate<R = unknown, P0 = unknown>(_initWithMenuToUpdate: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSWindowMenuUpdater<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSMenuDelegateProtocol {
      alloc<R = _NSWindowMenuUpdater>(): R;
      new: <R = _NSWindowMenuUpdater>() => R;
      attachUpdaterToMenu<R = void, P0 = unknown>(_attachUpdaterToMenu: P0): R;
    }
  }
}
