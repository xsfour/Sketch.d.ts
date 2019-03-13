/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSVerticallyCenteredTextFieldCell<T = any> extends NSTextFieldCell {
    rectForTextDrawing<R = CGRect, P0 = CGRect>(_rectForTextDrawing: P0): R;
  }
  namespace classes {
    export interface MSVerticallyCenteredTextFieldCell<T = any> extends NSTextFieldCell {
      alloc<R = MSVerticallyCenteredTextFieldCell>(): R;
      new: <R = MSVerticallyCenteredTextFieldCell>() => R;
    }
  }
}

declare const MSVerticallyCenteredTextFieldCell: cocoa.classes.MSVerticallyCenteredTextFieldCell;
