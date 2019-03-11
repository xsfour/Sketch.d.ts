/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVisualTabPickerGridViewDataSourceProtocol<T = any> extends cocoa.NSObjectProtocol {
    tilesHeightToWidthRatioInVisualTabPickerGridView<R = number, P0 = cocoa.NSVisualTabPickerGridView>(_tilesHeightToWidthRatioInVisualTabPickerGridView: P0): R;
    visualTabPickerGridView_thumbnailViewForTabItem<R = cocoa.NSView, P0 = cocoa.NSVisualTabPickerGridView, P1 = cocoa.NSTabBarItem>(_visualTabPickerGridView: P0, _thumbnailViewForTabItem: P1): R;
    selectedTabItemInVisualTabPickerGridView<R = cocoa.NSTabBarItem, P0 = cocoa.NSVisualTabPickerGridView>(_selectedTabItemInVisualTabPickerGridView: P0): R;
    orderedTabItemsInVisualTabPickerGridView<R = cocoa.NSArray, P0 = cocoa.NSVisualTabPickerGridView>(_orderedTabItemsInVisualTabPickerGridView: P0): R;
  }
  namespace classes {
    export interface NSVisualTabPickerGridViewDataSourceProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSVisualTabPickerGridViewDataSourceProtocol: cocoa.classes.NSVisualTabPickerGridViewDataSourceProtocol;
