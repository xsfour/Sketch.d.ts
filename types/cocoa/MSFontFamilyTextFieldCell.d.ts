/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFontFamilyTextFieldCell<T = any> extends cocoa.NSTextFieldCell {}
  namespace classes {
    export interface MSFontFamilyTextFieldCell<T = any> extends cocoa.classes.NSTextFieldCell {
      alloc<R = MSFontFamilyTextFieldCell>(): R;
      new: <R = MSFontFamilyTextFieldCell>() => R;
    }
  }
}

declare const MSFontFamilyTextFieldCell: cocoa.classes.MSFontFamilyTextFieldCell;
