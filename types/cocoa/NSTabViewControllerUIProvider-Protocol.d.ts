/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabViewControllerUIProviderProtocol<T = any> extends cocoa.NSObjectProtocol, cocoa.NSCodingProtocol {
    tearDown<R = void>(): R;
    setUpForTabView_inContainer<R = void, P0 = cocoa.NSTabView, P1 = cocoa.NSView>(_setUpForTabView: P0, _inContainer: P1): R;
    _associatedTabStyle<R = number>(): R;
    selectTabViewItemAtIndex<R = void, P0 = number>(_selectTabViewItemAtIndex: P0): R;
    removeTabView_atIndex_newSelectedIndex<R = void, P0 = cocoa.NSTabViewItem, P1 = number, P2 = number>(_removeTabView: P0, _atIndex: P1, _newSelectedIndex: P2): R;
    insertTabView_atIndex_newSelectedIndex<R = void, P0 = cocoa.NSTabViewItem, P1 = number, P2 = number>(_insertTabView: P0, _atIndex: P1, _newSelectedIndex: P2): R;
    setTabViewItemsFrom_to_newSelectedIndex<R = void, P0 = cocoa.NSArray, P1 = cocoa.NSArray, P2 = number>(_setTabViewItemsFrom: P0, _to: P1, _newSelectedIndex: P2): R;
    tabViewContainerWillMoveFromWindow_toWindow<R = void, P0 = cocoa.NSWindow, P1 = cocoa.NSWindow>(_tabViewContainerWillMoveFromWindow: P0, _toWindow: P1): R;
    tabViewController<R = cocoa.NSTabViewController>(): R;
    setTabViewController<R = void, P0 = cocoa.NSTabViewController>(_v: P0): R;
  }
  namespace classes {
    export interface NSTabViewControllerUIProviderProtocol<T = any> extends cocoa.classes.NSObjectProtocol, cocoa.classes.NSCodingProtocol {  }
  }
}

declare const NSTabViewControllerUIProviderProtocol: cocoa.classes.NSTabViewControllerUIProviderProtocol;
