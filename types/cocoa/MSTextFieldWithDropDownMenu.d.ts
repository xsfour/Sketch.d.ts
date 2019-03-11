/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTextFieldWithDropDownMenu<T = any> extends cocoa.NSTextField {
    cxx_destruct<R = void>(): R;
    dropDownArrowHitTestRect<R = cocoa.CGRect>(): R;
    popupMenu<R = cocoa.NSMenu>(): R;
    setPopupMenu<R = void, P0 = cocoa.NSMenu>(_v: P0): R;
  }
  namespace classes {
    export interface MSTextFieldWithDropDownMenu<T = any> extends cocoa.classes.NSTextField {
      alloc<R = MSTextFieldWithDropDownMenu>(): R;
      new: <R = MSTextFieldWithDropDownMenu>() => R;
      dropDownArrowImage<R = unknown>(): R;
    }
  }
}

declare const MSTextFieldWithDropDownMenu: cocoa.classes.MSTextFieldWithDropDownMenu;
