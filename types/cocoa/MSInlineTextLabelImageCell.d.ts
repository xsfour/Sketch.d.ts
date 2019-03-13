/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInlineTextLabelImageCell<T = any> extends NSTextFieldCell {
    cxx_destruct<R = void>(): R;
    font<R = unknown>(): R;
    textColor<R = unknown>(): R;
    cellSize<R = CGSize>(): R;
    setImage<R = void, P0 = unknown>(_setImage: P0): R;
    customFittingSize<R = NSValue>(): R;
    setCustomFittingSize<R = void, P0 = NSValue>(_v: P0): R;
  }
  namespace classes {
    export interface MSInlineTextLabelImageCell<T = any> extends NSTextFieldCell {
      alloc<R = MSInlineTextLabelImageCell>(): R;
      new: <R = MSInlineTextLabelImageCell>() => R;
      inlineTextLabelFont<R = unknown>(): R;
    }
  }
}

declare const MSInlineTextLabelImageCell: cocoa.classes.MSInlineTextLabelImageCell;
