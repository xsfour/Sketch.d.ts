/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTextFieldWithDropDownMenu<T = any> extends NSTextField {
    cxx_destruct<R = void>(): R;
    dropDownArrowHitTestRect<R = CGRect>(): R;
    popupMenu<R = NSMenu>(): R;
    setPopupMenu<R = void, P0 = NSMenu>(_v: P0): R;
  }
  namespace classes {
    export interface MSTextFieldWithDropDownMenu<T = any> extends NSTextField {
      alloc<R = MSTextFieldWithDropDownMenu>(): R;
      new: <R = MSTextFieldWithDropDownMenu>() => R;
      dropDownArrowImage<R = unknown>(): R;
    }
  }
}

declare const MSTextFieldWithDropDownMenu: cocoa.classes.MSTextFieldWithDropDownMenu;
