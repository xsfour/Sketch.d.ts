/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVisualTabPickerNewTabView<T = any> extends cocoa.NSVisualTabPickerShadowTileView {
    _setUpSubviews<R = void>(): R;
    delegate<R = cocoa.NSVisualTabPickerNewTabViewDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.NSVisualTabPickerNewTabViewDelegate>(_v: P0): R;
  }
  namespace classes {
    export interface NSVisualTabPickerNewTabView<T = any> extends cocoa.classes.NSVisualTabPickerShadowTileView {
      alloc<R = NSVisualTabPickerNewTabView>(): R;
      new: <R = NSVisualTabPickerNewTabView>() => R;
    }
  }
}

declare const NSVisualTabPickerNewTabView: cocoa.classes.NSVisualTabPickerNewTabView;
