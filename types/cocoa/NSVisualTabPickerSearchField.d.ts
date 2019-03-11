/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVisualTabPickerSearchField<T = any> extends cocoa.NSSearchField {
    _searchTextDidChange<R = void, P0 = unknown>(__searchTextDidChange: P0): R;
    delegate<R = cocoa.NSVisualTabPickerSearchFieldDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.NSVisualTabPickerSearchFieldDelegate>(_v: P0): R;
  }
  namespace classes {
    export interface NSVisualTabPickerSearchField<T = any> extends cocoa.classes.NSSearchField {
      alloc<R = NSVisualTabPickerSearchField>(): R;
      new: <R = NSVisualTabPickerSearchField>() => R;
    }
  }
}

declare const NSVisualTabPickerSearchField: cocoa.classes.NSVisualTabPickerSearchField;
