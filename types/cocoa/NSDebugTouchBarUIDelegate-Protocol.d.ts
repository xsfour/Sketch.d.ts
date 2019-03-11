/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDebugTouchBarUIDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    didUpdateResponderChainItems<R = void, P0 = cocoa.NSArray>(_didUpdateResponderChainItems: P0): R;
  }
  namespace classes {
    export interface NSDebugTouchBarUIDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSDebugTouchBarUIDelegateProtocol: cocoa.classes.NSDebugTouchBarUIDelegateProtocol;
