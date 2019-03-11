/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRulerBlockCell<T = any> extends cocoa.MSTintedHoverButtonCell {
    hoverTint<R = unknown>(): R;
    normalTint<R = unknown>(): R;
    state<R = number>(): R;
  }
  namespace classes {
    export interface MSRulerBlockCell<T = any> extends cocoa.classes.MSTintedHoverButtonCell {
      alloc<R = MSRulerBlockCell>(): R;
      new: <R = MSRulerBlockCell>() => R;
    }
  }
}

declare const MSRulerBlockCell: cocoa.classes.MSRulerBlockCell;
