/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarSharingServicePickerViewController<T = any> extends NSViewController {
    cxx_destruct<R = void>(): R;
    _showAppExtensionsPref<R = void, P0 = unknown>(__showAppExtensionsPref: P0): R;
    _loadContents<R = void>(): R;
    delegate<R = NSSharingServicePickerTouchBarItemDelegate>(): R;
    setDelegate<R = void, P0 = NSSharingServicePickerTouchBarItemDelegate>(_v: P0): R;
  }
  namespace classes {
    export interface NSTouchBarSharingServicePickerViewController<T = any> extends NSViewController {
      alloc<R = NSTouchBarSharingServicePickerViewController>(): R;
      new: <R = NSTouchBarSharingServicePickerViewController>() => R;
    }
  }
}

declare const NSTouchBarSharingServicePickerViewController: cocoa.classes.NSTouchBarSharingServicePickerViewController;
