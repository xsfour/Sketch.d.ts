/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTintedHoverButtonCell<T = any> extends cocoa.MSHoverButtonCell {
    hoverTint<R = cocoa.NSColor>(): R;
    normalTint<R = cocoa.NSColor>(): R;
  }
  namespace classes {
    export interface MSTintedHoverButtonCell<T = any> extends cocoa.classes.MSHoverButtonCell {
      alloc<R = MSTintedHoverButtonCell>(): R;
      new: <R = MSTintedHoverButtonCell>() => R;
    }
  }
}

declare const MSTintedHoverButtonCell: cocoa.classes.MSTintedHoverButtonCell;
