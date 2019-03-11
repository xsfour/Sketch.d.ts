/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVisualTabPickerNewTabViewDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    didRequestNewTabForNSVisualTabPickerNewTabView<R = void, P0 = cocoa.NSVisualTabPickerNewTabView>(_didRequestNewTabForNSVisualTabPickerNewTabView: P0): R;
  }
  namespace classes {
    export interface NSVisualTabPickerNewTabViewDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSVisualTabPickerNewTabViewDelegateProtocol: cocoa.classes.NSVisualTabPickerNewTabViewDelegateProtocol;
