/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMenuDelegateProtocol<T = any> {
    confinementRectForMenu_onScreen<R = cocoa.CGRect, P0 = cocoa.NSMenu, P1 = cocoa.NSScreen>(_confinementRectForMenu: P0, _onScreen: P1): R;
    menu_willHighlightItem<R = void, P0 = cocoa.NSMenu, P1 = cocoa.NSMenuItem>(_menu: P0, _willHighlightItem: P1): R;
    menuDidClose<R = void, P0 = cocoa.NSMenu>(_menuDidClose: P0): R;
    menuWillOpen<R = void, P0 = cocoa.NSMenu>(_menuWillOpen: P0): R;
    menuHasKeyEquivalent_forEvent_target_action<R = boolean, P0 = cocoa.NSMenu, P1 = cocoa.NSEvent, P2 = unknown, P3 = string>(_menuHasKeyEquivalent: P0, _forEvent: P1, _target: P2, _action: P3): R;
    menu_updateItem_atIndex_shouldCancel<R = boolean, P0 = cocoa.NSMenu, P1 = cocoa.NSMenuItem, P2 = number, P3 = boolean>(_menu: P0, _updateItem: P1, _atIndex: P2, _shouldCancel: P3): R;
    numberOfItemsInMenu<R = number, P0 = cocoa.NSMenu>(_numberOfItemsInMenu: P0): R;
    menuNeedsUpdate<R = void, P0 = cocoa.NSMenu>(_menuNeedsUpdate: P0): R;
  }
  namespace classes {
    export interface NSMenuDelegateProtocol<T = any> {  }
  }
}

declare const NSMenuDelegateProtocol: cocoa.classes.NSMenuDelegateProtocol;
