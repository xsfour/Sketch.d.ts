/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSwitchModeButtonCell<T = any> extends NSButtonCell {
    drawSelectionBackgroundInRect<R = void, P0 = CGRect>(_drawSelectionBackgroundInRect: P0): R;
  }
  namespace classes {
    export interface MSSwitchModeButtonCell<T = any> extends NSButtonCell {
      alloc<R = MSSwitchModeButtonCell>(): R;
      new: <R = MSSwitchModeButtonCell>() => R;
    }
  }
}

declare const MSSwitchModeButtonCell: cocoa.classes.MSSwitchModeButtonCell;
