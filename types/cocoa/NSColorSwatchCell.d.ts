/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorSwatchCell<T = any> extends NSTextFieldCell {
    _swatchRectForCellFrame<R = CGRect, P0 = CGRect>(__swatchRectForCellFrame: P0): R;
    swatchColor<R = NSColor>(): R;
    setSwatchColor<R = void, P0 = NSColor>(_v: P0): R;
    swatchSize<R = CGSize>(): R;
    setSwatchSize<R = void, P0 = CGSize>(_v: P0): R;
  }
  namespace classes {
    export interface NSColorSwatchCell<T = any> extends NSTextFieldCell {
      alloc<R = NSColorSwatchCell>(): R;
      new: <R = NSColorSwatchCell>() => R;
    }
  }
}

declare const NSColorSwatchCell: cocoa.classes.NSColorSwatchCell;
