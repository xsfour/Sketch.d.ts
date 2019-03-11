/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVisualTabPickerThumbnailDataSourceProtocol<T = any> extends cocoa.NSObjectProtocol {
    viewForVisualTabPickerTileThumbnailView<R = cocoa.NSView, P0 = cocoa.NSVisualTabPickerThumbnailView>(_viewForVisualTabPickerTileThumbnailView: P0): R;
    titleForNSVisualTabPickerThumbnailView<R = cocoa.NSString, P0 = cocoa.NSVisualTabPickerThumbnailView>(_titleForNSVisualTabPickerThumbnailView: P0): R;
  }
  namespace classes {
    export interface NSVisualTabPickerThumbnailDataSourceProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSVisualTabPickerThumbnailDataSourceProtocol: cocoa.classes.NSVisualTabPickerThumbnailDataSourceProtocol;
