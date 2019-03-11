/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCTableCellTitleTextField<T = any> extends cocoa.NSTextField {
    processLeftMouseDownEvent_withinFloatingRowView<R = boolean, P0 = unknown, P1 = unknown>(_processLeftMouseDownEvent: P0, _withinFloatingRowView: P1): R;
  }
  namespace classes {
    export interface BCTableCellTitleTextField<T = any> extends cocoa.classes.NSTextField {
      alloc<R = BCTableCellTitleTextField>(): R;
      new: <R = BCTableCellTitleTextField>() => R;
    }
  }
}

declare const BCTableCellTitleTextField: cocoa.classes.BCTableCellTitleTextField;
