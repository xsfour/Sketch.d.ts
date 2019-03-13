/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCenteredPopUpButtonCell<T = any> extends NSPopUpButtonCell {
    correctedTitle<R = unknown, P0 = unknown>(_correctedTitle: P0): R;
  }
  namespace classes {
    export interface MSCenteredPopUpButtonCell<T = any> extends NSPopUpButtonCell {
      alloc<R = MSCenteredPopUpButtonCell>(): R;
      new: <R = MSCenteredPopUpButtonCell>() => R;
    }
  }
}

declare const MSCenteredPopUpButtonCell: cocoa.classes.MSCenteredPopUpButtonCell;
