/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTintedHoverButtonCell<T = any> extends MSHoverButtonCell {
    hoverTint<R = NSColor>(): R;
    normalTint<R = NSColor>(): R;
  }
  namespace classes {
    export interface MSTintedHoverButtonCell<T = any> extends MSHoverButtonCell {
      alloc<R = MSTintedHoverButtonCell>(): R;
      new: <R = MSTintedHoverButtonCell>() => R;
    }
  }
}

declare const MSTintedHoverButtonCell: cocoa.classes.MSTintedHoverButtonCell;
