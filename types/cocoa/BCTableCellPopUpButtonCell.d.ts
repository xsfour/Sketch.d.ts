/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCTableCellPopUpButtonCell<T = any> extends NSPopUpButtonCell {
    nudgeControlView_by<R = void, P0 = unknown, P1 = number>(_nudgeControlView: P0, _by: P1): R;
  }
  namespace classes {
    export interface BCTableCellPopUpButtonCell<T = any> extends NSPopUpButtonCell {
      alloc<R = BCTableCellPopUpButtonCell>(): R;
      new: <R = BCTableCellPopUpButtonCell>() => R;
    }
  }
}

declare const BCTableCellPopUpButtonCell: cocoa.classes.BCTableCellPopUpButtonCell;
