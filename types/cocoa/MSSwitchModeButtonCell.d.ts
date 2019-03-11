/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSwitchModeButtonCell<T = any> extends cocoa.NSButtonCell {
    drawSelectionBackgroundInRect<R = void, P0 = cocoa.CGRect>(_drawSelectionBackgroundInRect: P0): R;
  }
  namespace classes {
    export interface MSSwitchModeButtonCell<T = any> extends cocoa.classes.NSButtonCell {
      alloc<R = MSSwitchModeButtonCell>(): R;
      new: <R = MSSwitchModeButtonCell>() => R;
    }
  }
}

declare const MSSwitchModeButtonCell: cocoa.classes.MSSwitchModeButtonCell;
