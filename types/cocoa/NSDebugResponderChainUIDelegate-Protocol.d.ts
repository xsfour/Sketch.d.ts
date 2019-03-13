/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDebugResponderChainUIDelegateProtocol<T = any> extends NSObjectProtocol {
    didUpdateResponderChainItems<R = void, P0 = NSArray>(_didUpdateResponderChainItems: P0): R;
  }
  namespace classes {
    export interface NSDebugResponderChainUIDelegateProtocol<T = any> extends NSObjectProtocol {  }
  }
}
