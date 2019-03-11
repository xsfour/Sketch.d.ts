/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabButtonDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    tabButtonDidBecomeFirstResponder<R = void, P0 = cocoa.NSTabButton>(_tabButtonDidBecomeFirstResponder: P0): R;
    closeTabButton<R = void, P0 = cocoa.NSTabButton>(_closeTabButton: P0): R;
    selectTabButton<R = void, P0 = cocoa.NSTabButton>(_selectTabButton: P0): R;
    tabButton_menuForEvent<R = cocoa.NSMenu, P0 = cocoa.NSTabButton, P1 = cocoa.NSEvent>(_tabButton: P0, _menuForEvent: P1): R;
  }
  namespace classes {
    export interface NSTabButtonDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSTabButtonDelegateProtocol: cocoa.classes.NSTabButtonDelegateProtocol;
