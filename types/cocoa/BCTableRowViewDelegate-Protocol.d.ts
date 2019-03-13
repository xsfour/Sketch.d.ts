/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCTableRowViewDelegateProtocol<T = any> extends NSObjectProtocol {
    tableRowView_displayTypeOfRowAtIndex<R = number, P0 = BCTableRowView, P1 = number>(_tableRowView: P0, _displayTypeOfRowAtIndex: P1): R;
    indexOfTableRowView<R = number, P0 = BCTableRowView>(_indexOfTableRowView: P0): R;
    isNodeExpandedInTableRowView<R = boolean, P0 = BCTableRowView>(_isNodeExpandedInTableRowView: P0): R;
    multipleNodesSelected<R = boolean>(): R;
    isNodeSelectedOnRow<R = boolean, P0 = number>(_isNodeSelectedOnRow: P0): R;
    isNodeSelectedInTableRowView<R = boolean, P0 = BCTableRowView>(_isNodeSelectedInTableRowView: P0): R;
  }
  namespace classes {
    export interface BCTableRowViewDelegateProtocol<T = any> extends NSObjectProtocol {  }
  }
}
