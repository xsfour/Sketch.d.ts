/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInlineTextLabelImageCell<T = any> extends cocoa.NSTextFieldCell {
    cxx_destruct<R = void>(): R;
    font<R = unknown>(): R;
    textColor<R = unknown>(): R;
    cellSize<R = cocoa.CGSize>(): R;
    setImage<R = void, P0 = unknown>(_setImage: P0): R;
    customFittingSize<R = cocoa.NSValue>(): R;
    setCustomFittingSize<R = void, P0 = cocoa.NSValue>(_v: P0): R;
  }
  namespace classes {
    export interface MSInlineTextLabelImageCell<T = any> extends cocoa.classes.NSTextFieldCell {
      alloc<R = MSInlineTextLabelImageCell>(): R;
      new: <R = MSInlineTextLabelImageCell>() => R;
      inlineTextLabelFont<R = unknown>(): R;
    }
  }
}

declare const MSInlineTextLabelImageCell: cocoa.classes.MSInlineTextLabelImageCell;
