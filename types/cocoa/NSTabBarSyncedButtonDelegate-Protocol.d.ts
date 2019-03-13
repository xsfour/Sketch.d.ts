/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabBarSyncedButtonDelegateProtocol<T = any> extends NSObjectProtocol {
    button_didSetHighlightStateToPressed_hovered<R = void, P0 = NSTabBarSyncedButton, P1 = boolean, P2 = boolean>(_button: P0, _didSetHighlightStateToPressed: P1, _hovered: P2): R;
  }
  namespace classes {
    export interface NSTabBarSyncedButtonDelegateProtocol<T = any> extends NSObjectProtocol {  }
  }
}
