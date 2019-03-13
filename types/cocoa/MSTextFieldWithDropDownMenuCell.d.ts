/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTextFieldWithDropDownMenuCell<T = any> extends MSInlineUpDownTextFieldCell {
    dropDownArrowRectWithFrame<R = CGRect, P0 = CGRect>(_dropDownArrowRectWithFrame: P0): R;
    drawArrowWithFrame_inView<R = void, P0 = CGRect, P1 = unknown>(_drawArrowWithFrame: P0, _inView: P1): R;
  }
  namespace classes {
    export interface MSTextFieldWithDropDownMenuCell<T = any> extends MSInlineUpDownTextFieldCell {
      alloc<R = MSTextFieldWithDropDownMenuCell>(): R;
      new: <R = MSTextFieldWithDropDownMenuCell>() => R;
    }
  }
}

declare const MSTextFieldWithDropDownMenuCell: cocoa.classes.MSTextFieldWithDropDownMenuCell;
