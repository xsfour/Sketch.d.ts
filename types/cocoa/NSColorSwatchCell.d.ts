/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorSwatchCell<T = any> extends cocoa.NSTextFieldCell {
    _swatchRectForCellFrame<R = cocoa.CGRect, P0 = cocoa.CGRect>(__swatchRectForCellFrame: P0): R;
    swatchColor<R = cocoa.NSColor>(): R;
    setSwatchColor<R = void, P0 = cocoa.NSColor>(_v: P0): R;
    swatchSize<R = cocoa.CGSize>(): R;
    setSwatchSize<R = void, P0 = cocoa.CGSize>(_v: P0): R;
  }
  namespace classes {
    export interface NSColorSwatchCell<T = any> extends cocoa.classes.NSTextFieldCell {
      alloc<R = NSColorSwatchCell>(): R;
      new: <R = NSColorSwatchCell>() => R;
    }
  }
}

declare const NSColorSwatchCell: cocoa.classes.NSColorSwatchCell;
