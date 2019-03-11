/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarAnimationDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    touchBar_shouldAnimateFromIdentifiers_toIdentifiers<R = boolean, P0 = cocoa.NSTouchBar, P1 = cocoa.NSArray, P2 = cocoa.NSArray>(_touchBar: P0, _shouldAnimateFromIdentifiers: P1, _toIdentifiers: P2): R;
  }
  namespace classes {
    export interface NSTouchBarAnimationDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSTouchBarAnimationDelegateProtocol: cocoa.classes.NSTouchBarAnimationDelegateProtocol;
