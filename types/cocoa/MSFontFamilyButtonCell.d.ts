/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFontFamilyButtonCell<T = any> extends cocoa.NSButtonCell {}
  namespace classes {
    export interface MSFontFamilyButtonCell<T = any> extends cocoa.classes.NSButtonCell {
      alloc<R = MSFontFamilyButtonCell>(): R;
      new: <R = MSFontFamilyButtonCell>() => R;
    }
  }
}

declare const MSFontFamilyButtonCell: cocoa.classes.MSFontFamilyButtonCell;
