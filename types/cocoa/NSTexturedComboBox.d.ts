/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTexturedComboBox<T = any> extends cocoa.NSComboBox {
    _cui_optionsForCurrentState<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTexturedComboBox<T = any> extends cocoa.classes.NSComboBox {
      alloc<R = NSTexturedComboBox>(): R;
      new: <R = NSTexturedComboBox>() => R;
    }
  }
}

declare const NSTexturedComboBox: cocoa.classes.NSTexturedComboBox;
