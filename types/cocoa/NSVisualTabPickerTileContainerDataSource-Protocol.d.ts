/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVisualTabPickerTileContainerDataSourceProtocol<T = any> extends cocoa.NSObjectProtocol {
    visualTabPickerTileContainerView_viewForTileAtIndex<R = cocoa.NSView, P0 = cocoa.NSVisualTabPickerTileContainerView, P1 = number>(_visualTabPickerTileContainerView: P0, _viewForTileAtIndex: P1): R;
    visualTabPickerTileContainerView_titleForTileAtIndex<R = cocoa.NSString, P0 = cocoa.NSVisualTabPickerTileContainerView, P1 = number>(_visualTabPickerTileContainerView: P0, _titleForTileAtIndex: P1): R;
    titleForNSVisualTabPickerTileContainerView<R = cocoa.NSString, P0 = cocoa.NSVisualTabPickerTileContainerView>(_titleForNSVisualTabPickerTileContainerView: P0): R;
    numberOfTilesInNSVisualTabPickerTileContainerView<R = number, P0 = cocoa.NSVisualTabPickerTileContainerView>(_numberOfTilesInNSVisualTabPickerTileContainerView: P0): R;
  }
  namespace classes {
    export interface NSVisualTabPickerTileContainerDataSourceProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSVisualTabPickerTileContainerDataSourceProtocol: cocoa.classes.NSVisualTabPickerTileContainerDataSourceProtocol;
