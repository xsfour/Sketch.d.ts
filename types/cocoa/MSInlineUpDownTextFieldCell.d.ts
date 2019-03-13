/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInlineUpDownTextFieldCell<T = any> extends NSTextFieldCell {
    drawOldFashioned<R = boolean>(): R;
    setDrawOldFashioned<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface MSInlineUpDownTextFieldCell<T = any> extends NSTextFieldCell {
      alloc<R = MSInlineUpDownTextFieldCell>(): R;
      new: <R = MSInlineUpDownTextFieldCell>() => R;
    }
  }
}

declare const MSInlineUpDownTextFieldCell: cocoa.classes.MSInlineUpDownTextFieldCell;
