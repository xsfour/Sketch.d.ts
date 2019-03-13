/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVisualTabPickerSearchFieldDelegateProtocol<T = any> extends NSSearchFieldDelegateProtocol {
    visualTabPickerSearchFieldTextDidChange<R = void, P0 = NSVisualTabPickerSearchField>(_visualTabPickerSearchFieldTextDidChange: P0): R;
  }
  namespace classes {
    export interface NSVisualTabPickerSearchFieldDelegateProtocol<T = any> extends NSSearchFieldDelegateProtocol {  }
  }
}
