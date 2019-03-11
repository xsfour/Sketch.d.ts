/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFontSizeUpDownComboBox<T = any> extends cocoa.MSUpDownComboBox {}
  namespace classes {
    export interface MSFontSizeUpDownComboBox<T = any> extends cocoa.classes.MSUpDownComboBox {
      alloc<R = MSFontSizeUpDownComboBox>(): R;
      new: <R = MSFontSizeUpDownComboBox>() => R;
    }
  }
}

declare const MSFontSizeUpDownComboBox: cocoa.classes.MSFontSizeUpDownComboBox;
