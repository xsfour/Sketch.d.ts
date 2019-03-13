/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSHUDWindowController<T = any> extends NSWindowController, NSWindowDelegateProtocol {
    toggle<R = void>(): R;
    trackIfDocumentWindow<R = void, P0 = unknown>(_trackIfDocumentWindow: P0): R;
    unregisterForNotifications<R = void>(): R;
    registerForNotifications<R = void>(): R;
    hudViewController<R = MSHUDViewController>(): R;
    setHudViewController<R = void, P0 = MSHUDViewController>(_v: P0): R;
    hudView<R = NSView>(): R;
    setHudView<R = void, P0 = NSView>(_v: P0): R;
    isVisible<R = boolean>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSHUDWindowController<T = any> extends NSWindowController, NSWindowDelegateProtocol {
      alloc<R = MSHUDWindowController>(): R;
      new: <R = MSHUDWindowController>() => R;
      makeHUD<R = unknown>(): R;
    }
  }
}

declare const MSHUDWindowController: cocoa.classes.MSHUDWindowController;
