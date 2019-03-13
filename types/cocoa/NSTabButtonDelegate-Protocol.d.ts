/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabButtonDelegateProtocol<T = any> extends NSObjectProtocol {
    tabButtonDidBecomeFirstResponder<R = void, P0 = NSTabButton>(_tabButtonDidBecomeFirstResponder: P0): R;
    closeTabButton<R = void, P0 = NSTabButton>(_closeTabButton: P0): R;
    selectTabButton<R = void, P0 = NSTabButton>(_selectTabButton: P0): R;
    tabButton_menuForEvent<R = NSMenu, P0 = NSTabButton, P1 = NSEvent>(_tabButton: P0, _menuForEvent: P1): R;
  }
  namespace classes {
    export interface NSTabButtonDelegateProtocol<T = any> extends NSObjectProtocol {  }
  }
}
