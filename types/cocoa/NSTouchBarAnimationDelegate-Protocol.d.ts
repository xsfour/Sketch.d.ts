/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarAnimationDelegateProtocol<T = any> extends NSObjectProtocol {
    touchBar_shouldAnimateFromIdentifiers_toIdentifiers<R = boolean, P0 = NSTouchBar, P1 = NSArray, P2 = NSArray>(_touchBar: P0, _shouldAnimateFromIdentifiers: P1, _toIdentifiers: P2): R;
  }
  namespace classes {
    export interface NSTouchBarAnimationDelegateProtocol<T = any> extends NSObjectProtocol {  }
  }
}
