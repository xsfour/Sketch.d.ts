/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableViewCellElementProtocol<T = any> extends cocoa.NSObjectProtocol {
    accessibilityFocusedUIElement<R = unknown>(): R;
    accessibilityHitTest<R = unknown, P0 = cocoa.CGPoint>(_accessibilityHitTest: P0): R;
    tableView<R = cocoa.NSTableView>(): R;
    column<R = number>(): R;
    row<R = number>(): R;
  }
  namespace classes {
    export interface NSTableViewCellElementProtocol<T = any> extends cocoa.classes.NSObjectProtocol {
      cellForRow_tableColumn<R = cocoa.NSTableViewCellElement, P0 = number, P1 = cocoa.NSTableColumn>(_cellForRow: P0, _tableColumn: P1): R;
      cellForRow_column_tableView<R = cocoa.NSTableViewCellElement, P0 = number, P1 = number, P2 = cocoa.NSTableView>(_cellForRow: P0, _column: P1, _tableView: P2): R;
    }
  }
}

declare const NSTableViewCellElementProtocol: cocoa.classes.NSTableViewCellElementProtocol;
