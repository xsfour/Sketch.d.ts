/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVisualTabPickerGridViewDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    visualTabPickerGridViewCloseTabViewItem<R = void, P0 = cocoa.NSTabBarItem>(_visualTabPickerGridViewCloseTabViewItem: P0): R;
    visualTabPickerGridView_selectTab<R = void, P0 = cocoa.NSVisualTabPickerGridView, P1 = cocoa.NSTabBarItem>(_visualTabPickerGridView: P0, _selectTab: P1): R;
    createNewTabForVisualTabPickerGridView<R = void, P0 = cocoa.NSVisualTabPickerGridView>(_createNewTabForVisualTabPickerGridView: P0): R;
    canCloseTabsInVisualTabPickerGridView<R = boolean, P0 = cocoa.NSVisualTabPickerGridView>(_canCloseTabsInVisualTabPickerGridView: P0): R;
  }
  namespace classes {
    export interface NSVisualTabPickerGridViewDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSVisualTabPickerGridViewDelegateProtocol: cocoa.classes.NSVisualTabPickerGridViewDelegateProtocol;
