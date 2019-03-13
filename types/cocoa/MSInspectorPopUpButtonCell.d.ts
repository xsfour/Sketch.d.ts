/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorPopUpButtonCell<T = any> extends NSPopUpButtonCell {
    inspectorPopUpArrowRectForBounds<R = CGRect, P0 = CGRect>(_inspectorPopUpArrowRectForBounds: P0): R;
    inspectorArrowImage<R = unknown>(): R;
  }
  namespace classes {
    export interface MSInspectorPopUpButtonCell<T = any> extends NSPopUpButtonCell {
      alloc<R = MSInspectorPopUpButtonCell>(): R;
      new: <R = MSInspectorPopUpButtonCell>() => R;
    }
  }
}

declare const MSInspectorPopUpButtonCell: cocoa.classes.MSInspectorPopUpButtonCell;
