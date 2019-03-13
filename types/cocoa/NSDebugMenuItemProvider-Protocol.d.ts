/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDebugMenuItemProviderProtocol<T = any> extends NSObjectProtocol {
    init<R = unknown>(): R;
    menuItem<R = NSMenuItem>(): R;
  }
  namespace classes {
    export interface NSDebugMenuItemProviderProtocol<T = any> extends NSObjectProtocol {  }
  }
}
