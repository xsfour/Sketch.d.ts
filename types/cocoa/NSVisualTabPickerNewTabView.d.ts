/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVisualTabPickerNewTabView<T = any> extends NSVisualTabPickerShadowTileView {
    _setUpSubviews<R = void>(): R;
    delegate<R = NSVisualTabPickerNewTabViewDelegate>(): R;
    setDelegate<R = void, P0 = NSVisualTabPickerNewTabViewDelegate>(_v: P0): R;
  }
  namespace classes {
    export interface NSVisualTabPickerNewTabView<T = any> extends NSVisualTabPickerShadowTileView {
      alloc<R = NSVisualTabPickerNewTabView>(): R;
      new: <R = NSVisualTabPickerNewTabView>() => R;
    }
  }
}

declare const NSVisualTabPickerNewTabView: cocoa.classes.NSVisualTabPickerNewTabView;
