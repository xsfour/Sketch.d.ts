/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVisualTabPickerTileContainerDelegateProtocol<T = any> extends NSObjectProtocol {
    didRequestNewTabForNSVisualTabPickerTileContainerView<R = void, P0 = NSVisualTabPickerTileContainerView>(_didRequestNewTabForNSVisualTabPickerTileContainerView: P0): R;
    visualTabPickerTileContainerView_didSelectTileAtIndex<R = void, P0 = NSVisualTabPickerTileContainerView, P1 = number>(_visualTabPickerTileContainerView: P0, _didSelectTileAtIndex: P1): R;
    visualTabPickerTileContainerView_closeTileAtIndex<R = void, P0 = NSVisualTabPickerTileContainerView, P1 = number>(_visualTabPickerTileContainerView: P0, _closeTileAtIndex: P1): R;
    canCloseNSVisualTabPickerTileContainerView<R = boolean, P0 = NSVisualTabPickerTileContainerView>(_canCloseNSVisualTabPickerTileContainerView: P0): R;
  }
  namespace classes {
    export interface NSVisualTabPickerTileContainerDelegateProtocol<T = any> extends NSObjectProtocol {  }
  }
}
