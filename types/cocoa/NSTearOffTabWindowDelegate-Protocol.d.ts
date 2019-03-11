/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTearOffTabWindowDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    detachWindowForTearOffTabWindow<R = cocoa.NSWindow, P0 = cocoa.NSTearOffTabWindow>(_detachWindowForTearOffTabWindow: P0): R;
  }
  namespace classes {
    export interface NSTearOffTabWindowDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSTearOffTabWindowDelegateProtocol: cocoa.classes.NSTearOffTabWindowDelegateProtocol;
