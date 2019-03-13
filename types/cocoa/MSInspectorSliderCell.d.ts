/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorSliderCell<T = any> extends NSSliderCell {
    drawTickmarkKnob<R = void, P0 = CGRect>(_drawTickmarkKnob: P0): R;
  }
  namespace classes {
    export interface MSInspectorSliderCell<T = any> extends NSSliderCell {
      alloc<R = MSInspectorSliderCell>(): R;
      new: <R = MSInspectorSliderCell>() => R;
    }
  }
}

declare const MSInspectorSliderCell: cocoa.classes.MSInspectorSliderCell;
