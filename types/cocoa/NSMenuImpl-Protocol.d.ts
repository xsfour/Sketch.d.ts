/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMenuImplProtocol<T = any> extends cocoa.NSObjectProtocol {
    _principalMenuRef<R = cocoa.OpaqueMenuRef>(): R;
    _menuItem_atIndex_didChangeDestructiveFrom_to<R = void, P0 = cocoa.NSMenuItem, P1 = number, P2 = boolean, P3 = boolean>(__menuItem: P0, _atIndex: P1, _didChangeDestructiveFrom: P2, _to: P3): R;
    _menuItem_atIndex_didChangeAlternateFrom_to<R = void, P0 = cocoa.NSMenuItem, P1 = number, P2 = boolean, P3 = boolean>(__menuItem: P0, _atIndex: P1, _didChangeAlternateFrom: P2, _to: P3): R;
    _menuDidRemoveAllItems<R = void, P0 = cocoa.NSArray>(__menuDidRemoveAllItems: P0): R;
    _cancelTrackingWithAnimation<R = void, P0 = boolean>(__cancelTrackingWithAnimation: P0): R;
    targetedItem<R = cocoa.NSMenuItem>(): R;
    _presentingView<R = cocoa.NSView>(): R;
  }
  namespace classes {
    export interface NSMenuImplProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSMenuImplProtocol: cocoa.classes.NSMenuImplProtocol;
