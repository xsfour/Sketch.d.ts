/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCTableCellViewDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    tableCellOutlineView<R = cocoa.BCOutlineView, P0 = cocoa.BCTableCellView>(_tableCellOutlineView: P0): R;
    tableCellViewDestinationWindow<R = cocoa.NSWindow, P0 = cocoa.BCTableCellView>(_tableCellViewDestinationWindow: P0): R;
    tableCellViewNodeRequiresRefresh<R = void, P0 = cocoa.BCTableCellView>(_tableCellViewNodeRequiresRefresh: P0): R;
    tableCellViewDidBeginEditing<R = void, P0 = cocoa.BCTableCellView>(_tableCellViewDidBeginEditing: P0): R;
    tableCellViewMouseExited<R = void, P0 = cocoa.BCTableCellView>(_tableCellViewMouseExited: P0): R;
    tableCellViewMouseEntered<R = void, P0 = cocoa.BCTableCellView>(_tableCellViewMouseEntered: P0): R;
    tableCellViewHandleBadgePressed<R = void, P0 = cocoa.BCTableCellView>(_tableCellViewHandleBadgePressed: P0): R;
    isTableCellViewNodeLockedOnCanvas<R = boolean, P0 = cocoa.BCTableCellView>(_isTableCellViewNodeLockedOnCanvas: P0): R;
    isTableCellViewNodeContainedByHiddenAncestorNode<R = boolean, P0 = cocoa.BCTableCellView>(_isTableCellViewNodeContainedByHiddenAncestorNode: P0): R;
    isTableCellViewNodeHiddenOnCanvas<R = boolean, P0 = cocoa.BCTableCellView>(_isTableCellViewNodeHiddenOnCanvas: P0): R;
    isTableCellViewNodeSelected<R = boolean, P0 = cocoa.BCTableCellView>(_isTableCellViewNodeSelected: P0): R;
  }
  namespace classes {
    export interface BCTableCellViewDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const BCTableCellViewDelegateProtocol: cocoa.classes.BCTableCellViewDelegateProtocol;
