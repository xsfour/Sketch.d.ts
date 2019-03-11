/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabPickerDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    tabPickerDidClose<R = void, P0 = cocoa.NSTabPickerViewController>(_tabPickerDidClose: P0): R;
    tabPickerWillClose<R = void, P0 = cocoa.NSTabPickerViewController>(_tabPickerWillClose: P0): R;
    tabPickerDidOpen<R = void, P0 = cocoa.NSTabPickerViewController>(_tabPickerDidOpen: P0): R;
    tabPickerWillOpen<R = void, P0 = cocoa.NSTabPickerViewController>(_tabPickerWillOpen: P0): R;
    tabPicker_thumbnailViewForTabItem<R = cocoa.NSView, P0 = cocoa.NSTabPickerViewController, P1 = cocoa.NSTabBarItem>(_tabPicker: P0, _thumbnailViewForTabItem: P1): R;
    tabBarSnapshotForTabPicker<R = cocoa.NSImage, P0 = cocoa.NSTabPickerViewController>(_tabBarSnapshotForTabPicker: P0): R;
    tabPickerItemsForTabPicker<R = cocoa.NSArray, P0 = cocoa.NSTabPickerViewController>(_tabPickerItemsForTabPicker: P0): R;
    tabPickerCurrentlySelectedTabItem<R = cocoa.NSTabBarItem, P0 = cocoa.NSTabPickerViewController>(_tabPickerCurrentlySelectedTabItem: P0): R;
    tabPickerCreatingNewTabItem<R = cocoa.NSTabBarItem, P0 = cocoa.NSTabPickerViewController>(_tabPickerCreatingNewTabItem: P0): R;
    tabPicker_nextTabPickerItemAfterClosingItem<R = cocoa.NSTabBarItem, P0 = cocoa.NSTabPickerViewController, P1 = cocoa.NSTabBarItem>(_tabPicker: P0, _nextTabPickerItemAfterClosingItem: P1): R;
    tabPicker_closeTabBarItem<R = void, P0 = cocoa.NSTabPickerViewController, P1 = cocoa.NSTabBarItem>(_tabPicker: P0, _closeTabBarItem: P1): R;
    tabPicker_didSelectTabItemWhenClosing<R = void, P0 = cocoa.NSTabPickerViewController, P1 = cocoa.NSTabBarItem>(_tabPicker: P0, _didSelectTabItemWhenClosing: P1): R;
  }
  namespace classes {
    export interface NSTabPickerDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSTabPickerDelegateProtocol: cocoa.classes.NSTabPickerDelegateProtocol;
