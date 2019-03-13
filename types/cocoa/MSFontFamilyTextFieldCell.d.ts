/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFontFamilyTextFieldCell<T = any> extends NSTextFieldCell {}
  namespace classes {
    export interface MSFontFamilyTextFieldCell<T = any> extends NSTextFieldCell {
      alloc<R = MSFontFamilyTextFieldCell>(): R;
      new: <R = MSFontFamilyTextFieldCell>() => R;
    }
  }
}

declare const MSFontFamilyTextFieldCell: cocoa.classes.MSFontFamilyTextFieldCell;
