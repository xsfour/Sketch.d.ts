/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetPickerHeaderView<T = any> extends cocoa.NSView {
    cxx_destruct<R = void>(): R;
    titleButtonWasClicked<R = void, P0 = unknown>(_titleButtonWasClicked: P0): R;
    expandArrowWasClicked<R = void, P0 = unknown>(_expandArrowWasClicked: P0): R;
    disclosureButton<R = unknown>(): R;
    preferenceKey<R = cocoa.NSString>(): R;
    setPreferenceKey<R = void, P0 = cocoa.NSString>(_v: P0): R;
    delegate<R = cocoa.MSAssetPickerHeaderViewDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.MSAssetPickerHeaderViewDelegate>(_v: P0): R;
  }
  namespace classes {
    export interface MSAssetPickerHeaderView<T = any> extends cocoa.classes.NSView {
      alloc<R = MSAssetPickerHeaderView>(): R;
      new: <R = MSAssetPickerHeaderView>() => R;
      headerPickerWithTitle_isExpandedPreference_delegate<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_headerPickerWithTitle: P0, _isExpandedPreference: P1, _delegate: P2): R;
    }
  }
}

declare const MSAssetPickerHeaderView: cocoa.classes.MSAssetPickerHeaderView;
