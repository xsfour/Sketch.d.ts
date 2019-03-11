/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSVerticallyCenteredTextFieldCell<T = any> extends cocoa.NSTextFieldCell {
    rectForTextDrawing<R = cocoa.CGRect, P0 = cocoa.CGRect>(_rectForTextDrawing: P0): R;
  }
  namespace classes {
    export interface MSVerticallyCenteredTextFieldCell<T = any> extends cocoa.classes.NSTextFieldCell {
      alloc<R = MSVerticallyCenteredTextFieldCell>(): R;
      new: <R = MSVerticallyCenteredTextFieldCell>() => R;
    }
  }
}

declare const MSVerticallyCenteredTextFieldCell: cocoa.classes.MSVerticallyCenteredTextFieldCell;
