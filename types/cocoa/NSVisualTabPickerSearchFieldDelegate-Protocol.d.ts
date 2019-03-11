/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVisualTabPickerSearchFieldDelegateProtocol<T = any> extends cocoa.NSSearchFieldDelegateProtocol {
    visualTabPickerSearchFieldTextDidChange<R = void, P0 = cocoa.NSVisualTabPickerSearchField>(_visualTabPickerSearchFieldTextDidChange: P0): R;
  }
  namespace classes {
    export interface NSVisualTabPickerSearchFieldDelegateProtocol<T = any> extends cocoa.classes.NSSearchFieldDelegateProtocol {  }
  }
}

declare const NSVisualTabPickerSearchFieldDelegateProtocol: cocoa.classes.NSVisualTabPickerSearchFieldDelegateProtocol;
