/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarSharingServicePickerViewController<T = any> extends cocoa.NSViewController {
    cxx_destruct<R = void>(): R;
    _showAppExtensionsPref<R = void, P0 = unknown>(__showAppExtensionsPref: P0): R;
    _loadContents<R = void>(): R;
    delegate<R = cocoa.NSSharingServicePickerTouchBarItemDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.NSSharingServicePickerTouchBarItemDelegate>(_v: P0): R;
  }
  namespace classes {
    export interface NSTouchBarSharingServicePickerViewController<T = any> extends cocoa.classes.NSViewController {
      alloc<R = NSTouchBarSharingServicePickerViewController>(): R;
      new: <R = NSTouchBarSharingServicePickerViewController>() => R;
    }
  }
}

declare const NSTouchBarSharingServicePickerViewController: cocoa.classes.NSTouchBarSharingServicePickerViewController;
