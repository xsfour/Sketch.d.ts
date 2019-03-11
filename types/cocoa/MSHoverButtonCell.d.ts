/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSHoverButtonCell<T = any> extends cocoa.NSButtonCell {
    imageFromImage_withState_hovering<R = unknown, P0 = unknown, P1 = number, P2 = boolean>(_imageFromImage: P0, _withState: P1, _hovering: P2): R;
  }
  namespace classes {
    export interface MSHoverButtonCell<T = any> extends cocoa.classes.NSButtonCell {
      alloc<R = MSHoverButtonCell>(): R;
      new: <R = MSHoverButtonCell>() => R;
    }
  }
}

declare const MSHoverButtonCell: cocoa.classes.MSHoverButtonCell;
