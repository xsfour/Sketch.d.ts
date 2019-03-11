/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDebugMenuItemProviderProtocol<T = any> extends cocoa.NSObjectProtocol {
    init<R = unknown>(): R;
    menuItem<R = cocoa.NSMenuItem>(): R;
  }
  namespace classes {
    export interface NSDebugMenuItemProviderProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSDebugMenuItemProviderProtocol: cocoa.classes.NSDebugMenuItemProviderProtocol;
