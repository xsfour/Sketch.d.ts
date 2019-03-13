/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDebugTouchBarUIDelegateProtocol<T = any> extends NSObjectProtocol {
    didUpdateResponderChainItems<R = void, P0 = NSArray>(_didUpdateResponderChainItems: P0): R;
  }
  namespace classes {
    export interface NSDebugTouchBarUIDelegateProtocol<T = any> extends NSObjectProtocol {  }
  }
}
