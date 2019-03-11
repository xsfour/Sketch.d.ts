/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSHUDWindowController<T = any> extends cocoa.NSWindowController, cocoa.NSWindowDelegateProtocol {
    toggle<R = void>(): R;
    trackIfDocumentWindow<R = void, P0 = unknown>(_trackIfDocumentWindow: P0): R;
    unregisterForNotifications<R = void>(): R;
    registerForNotifications<R = void>(): R;
    hudViewController<R = cocoa.MSHUDViewController>(): R;
    setHudViewController<R = void, P0 = cocoa.MSHUDViewController>(_v: P0): R;
    hudView<R = cocoa.NSView>(): R;
    setHudView<R = void, P0 = cocoa.NSView>(_v: P0): R;
    isVisible<R = boolean>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSHUDWindowController<T = any> extends cocoa.classes.NSWindowController, cocoa.classes.NSWindowDelegateProtocol {
      alloc<R = MSHUDWindowController>(): R;
      new: <R = MSHUDWindowController>() => R;
      makeHUD<R = unknown>(): R;
    }
  }
}

declare const MSHUDWindowController: cocoa.classes.MSHUDWindowController;
