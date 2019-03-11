/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDebugResponderChainUIDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    didUpdateResponderChainItems<R = void, P0 = cocoa.NSArray>(_didUpdateResponderChainItems: P0): R;
  }
  namespace classes {
    export interface NSDebugResponderChainUIDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSDebugResponderChainUIDelegateProtocol: cocoa.classes.NSDebugResponderChainUIDelegateProtocol;
