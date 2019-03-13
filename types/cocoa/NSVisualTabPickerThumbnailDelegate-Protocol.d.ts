/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVisualTabPickerThumbnailDelegateProtocol<T = any> extends NSObjectProtocol {
    didCloseVisualTabPickerThumbnailView<R = void, P0 = NSVisualTabPickerThumbnailView>(_didCloseVisualTabPickerThumbnailView: P0): R;
    didSelectVisualTabPickerThumbnailView<R = void, P0 = NSVisualTabPickerThumbnailView>(_didSelectVisualTabPickerThumbnailView: P0): R;
    canCloseTabInNSVisualTabPickerThumbnailView<R = boolean, P0 = NSVisualTabPickerThumbnailView>(_canCloseTabInNSVisualTabPickerThumbnailView: P0): R;
  }
  namespace classes {
    export interface NSVisualTabPickerThumbnailDelegateProtocol<T = any> extends NSObjectProtocol {  }
  }
}
