/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorHexFieldCell<T = any> extends MSInlineUpDownTextFieldCell {
    poundPrefixString<R = unknown>(): R;
  }
  namespace classes {
    export interface MSColorHexFieldCell<T = any> extends MSInlineUpDownTextFieldCell {
      alloc<R = MSColorHexFieldCell>(): R;
      new: <R = MSColorHexFieldCell>() => R;
    }
  }
}

declare const MSColorHexFieldCell: cocoa.classes.MSColorHexFieldCell;
