/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVisualTabPickerDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    visualTabPickerControllerDidEndHiding<R = void, P0 = cocoa.NSVisualTabPickerRootViewController>(_visualTabPickerControllerDidEndHiding: P0): R;
    visualTabPickerControllerDidBeginHiding<R = void, P0 = cocoa.NSVisualTabPickerRootViewController>(_visualTabPickerControllerDidBeginHiding: P0): R;
    visualTabPickerControllerWillClose<R = void, P0 = cocoa.NSVisualTabPickerRootViewController>(_visualTabPickerControllerWillClose: P0): R;
    visualTabPickerController_closeTabBarItem<R = void, P0 = cocoa.NSVisualTabPickerRootViewController, P1 = cocoa.NSTabBarItem>(_visualTabPickerController: P0, _closeTabBarItem: P1): R;
    visualTabPickerController_selectTab<R = void, P0 = cocoa.NSVisualTabPickerRootViewController, P1 = cocoa.NSTabBarItem>(_visualTabPickerController: P0, _selectTab: P1): R;
    createNewTabForVisualTabPickerController<R = void, P0 = cocoa.NSVisualTabPickerRootViewController>(_createNewTabForVisualTabPickerController: P0): R;
    creatingNewTabWillCloseVisualTabPickerController<R = boolean, P0 = cocoa.NSVisualTabPickerRootViewController>(_creatingNewTabWillCloseVisualTabPickerController: P0): R;
    tabBarItemsForVisualTabPickerController<R = cocoa.NSArray, P0 = cocoa.NSVisualTabPickerRootViewController>(_tabBarItemsForVisualTabPickerController: P0): R;
    selectedTabViewItemForVisualTabPickerController<R = cocoa.NSTabBarItem, P0 = cocoa.NSVisualTabPickerRootViewController>(_selectedTabViewItemForVisualTabPickerController: P0): R;
    frameForVisualTabPickerController<R = cocoa.CGRect, P0 = cocoa.NSVisualTabPickerRootViewController>(_frameForVisualTabPickerController: P0): R;
    visualTabPicker_thumbnailViewForTabItem<R = cocoa.NSView, P0 = cocoa.NSVisualTabPickerRootViewController, P1 = cocoa.NSTabBarItem>(_visualTabPicker: P0, _thumbnailViewForTabItem: P1): R;
  }
  namespace classes {
    export interface NSVisualTabPickerDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSVisualTabPickerDelegateProtocol: cocoa.classes.NSVisualTabPickerDelegateProtocol;
