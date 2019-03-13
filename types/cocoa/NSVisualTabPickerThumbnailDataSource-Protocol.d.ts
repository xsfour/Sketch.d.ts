/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVisualTabPickerThumbnailDataSourceProtocol<T = any> extends NSObjectProtocol {
    viewForVisualTabPickerTileThumbnailView<R = NSView, P0 = NSVisualTabPickerThumbnailView>(_viewForVisualTabPickerTileThumbnailView: P0): R;
    titleForNSVisualTabPickerThumbnailView<R = NSString, P0 = NSVisualTabPickerThumbnailView>(_titleForNSVisualTabPickerThumbnailView: P0): R;
  }
  namespace classes {
    export interface NSVisualTabPickerThumbnailDataSourceProtocol<T = any> extends NSObjectProtocol {  }
  }
}
