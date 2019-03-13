/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSReplacementFontPickerViewController<T = any> extends MSFontFamilyPickerViewController {
    nibName<R = unknown>(): R;
  }
  namespace classes {
    export interface MSReplacementFontPickerViewController<T = any> extends MSFontFamilyPickerViewController {
      alloc<R = MSReplacementFontPickerViewController>(): R;
      new: <R = MSReplacementFontPickerViewController>() => R;
    }
  }
}

declare const MSReplacementFontPickerViewController: cocoa.classes.MSReplacementFontPickerViewController;
