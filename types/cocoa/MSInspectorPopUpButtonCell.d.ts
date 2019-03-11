/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorPopUpButtonCell<T = any> extends cocoa.NSPopUpButtonCell {
    inspectorPopUpArrowRectForBounds<R = cocoa.CGRect, P0 = cocoa.CGRect>(_inspectorPopUpArrowRectForBounds: P0): R;
    inspectorArrowImage<R = unknown>(): R;
  }
  namespace classes {
    export interface MSInspectorPopUpButtonCell<T = any> extends cocoa.classes.NSPopUpButtonCell {
      alloc<R = MSInspectorPopUpButtonCell>(): R;
      new: <R = MSInspectorPopUpButtonCell>() => R;
    }
  }
}

declare const MSInspectorPopUpButtonCell: cocoa.classes.MSInspectorPopUpButtonCell;
