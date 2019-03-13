/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTearOffTabWindowDelegateProtocol<T = any> extends NSObjectProtocol {
    detachWindowForTearOffTabWindow<R = NSWindow, P0 = NSTearOffTabWindow>(_detachWindowForTearOffTabWindow: P0): R;
  }
  namespace classes {
    export interface NSTearOffTabWindowDelegateProtocol<T = any> extends NSObjectProtocol {  }
  }
}
