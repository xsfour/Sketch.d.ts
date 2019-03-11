/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabViewControllerToolbarUIProvider<T = any> extends cocoa.NSObject, cocoa.NSTabViewControllerUIProviderProtocol, cocoa.NSToolbarDelegateProtocol {
    _toolbarSelectableItemIdentifiers<R = unknown, P0 = unknown>(__toolbarSelectableItemIdentifiers: P0): R;
    _toolbarAllowedItemIdentifiers<R = unknown, P0 = unknown>(__toolbarAllowedItemIdentifiers: P0): R;
    _toolbarDefaultItemIdentifiers<R = unknown, P0 = unknown>(__toolbarDefaultItemIdentifiers: P0): R;
    _toolbar_itemForItemIdentifier_willBeInsertedIntoToolbar<R = unknown, P0 = unknown, P1 = unknown, P2 = boolean>(__toolbar: P0, _itemForItemIdentifier: P1, _willBeInsertedIntoToolbar: P2): R;
    _tabViewControllerToolbarItemIdentifiers<R = unknown, P0 = unknown>(__tabViewControllerToolbarItemIdentifiers: P0): R;
    _toolbarItemAction<R = void, P0 = unknown>(__toolbarItemAction: P0): R;
    _tabViewItemIndexWithIdentifier<R = number, P0 = unknown>(__tabViewItemIndexWithIdentifier: P0): R;
    _toolbarItemIdentifierForTabViewItemIndex<R = unknown, P0 = number>(__toolbarItemIdentifierForTabViewItemIndex: P0): R;
    _toolbarItemWithIdentifier<R = unknown, P0 = unknown>(__toolbarItemWithIdentifier: P0): R;
    _removeAllToolbarItems<R = void>(): R;
    _toolbarItems<R = unknown>(): R;
    _addConstraintsForTabView_inContainer<R = void, P0 = unknown, P1 = unknown>(__addConstraintsForTabView: P0, _inContainer: P1): R;
    dealloc<R = void>(): R;
    tabViewController<R = cocoa.NSTabViewController>(): R;
    setTabViewController<R = void, P0 = cocoa.NSTabViewController>(_v: P0): R;
    toolbar<R = cocoa.NSToolbar>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTabViewControllerToolbarUIProvider<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSTabViewControllerUIProviderProtocol, cocoa.classes.NSToolbarDelegateProtocol {
      alloc<R = NSTabViewControllerToolbarUIProvider>(): R;
      new: <R = NSTabViewControllerToolbarUIProvider>() => R;
    }
  }
}

declare const NSTabViewControllerToolbarUIProvider: cocoa.classes.NSTabViewControllerToolbarUIProvider;
