/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSToolbarDelegateProtocol<T = any> {
    toolbarDidRemoveItem<R = void, P0 = cocoa.NSNotification>(_toolbarDidRemoveItem: P0): R;
    toolbarWillAddItem<R = void, P0 = cocoa.NSNotification>(_toolbarWillAddItem: P0): R;
    toolbarSelectableItemIdentifiers<R = cocoa.NSArray, P0 = cocoa.NSToolbar>(_toolbarSelectableItemIdentifiers: P0): R;
    toolbarAllowedItemIdentifiers<R = cocoa.NSArray, P0 = cocoa.NSToolbar>(_toolbarAllowedItemIdentifiers: P0): R;
    toolbarDefaultItemIdentifiers<R = cocoa.NSArray, P0 = cocoa.NSToolbar>(_toolbarDefaultItemIdentifiers: P0): R;
    toolbar_itemForItemIdentifier_willBeInsertedIntoToolbar<R = cocoa.NSToolbarItem, P0 = cocoa.NSToolbar, P1 = cocoa.NSString, P2 = boolean>(_toolbar: P0, _itemForItemIdentifier: P1, _willBeInsertedIntoToolbar: P2): R;
  }
  namespace classes {
    export interface NSToolbarDelegateProtocol<T = any> {  }
  }
}

declare const NSToolbarDelegateProtocol: cocoa.classes.NSToolbarDelegateProtocol;
