/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOutlineViewDelegateProtocol<T = any> extends cocoa.NSControlTextEditingDelegateProtocol {
    outlineViewItemDidCollapse<R = void, P0 = cocoa.NSNotification>(_outlineViewItemDidCollapse: P0): R;
    outlineViewItemWillCollapse<R = void, P0 = cocoa.NSNotification>(_outlineViewItemWillCollapse: P0): R;
    outlineViewItemDidExpand<R = void, P0 = cocoa.NSNotification>(_outlineViewItemDidExpand: P0): R;
    outlineViewItemWillExpand<R = void, P0 = cocoa.NSNotification>(_outlineViewItemWillExpand: P0): R;
    outlineViewSelectionIsChanging<R = void, P0 = cocoa.NSNotification>(_outlineViewSelectionIsChanging: P0): R;
    outlineViewColumnDidResize<R = void, P0 = cocoa.NSNotification>(_outlineViewColumnDidResize: P0): R;
    outlineViewColumnDidMove<R = void, P0 = cocoa.NSNotification>(_outlineViewColumnDidMove: P0): R;
    outlineViewSelectionDidChange<R = void, P0 = cocoa.NSNotification>(_outlineViewSelectionDidChange: P0): R;
    outlineView_shouldShowOutlineCellForItem<R = boolean, P0 = cocoa.NSOutlineView, P1 = unknown>(_outlineView: P0, _shouldShowOutlineCellForItem: P1): R;
    outlineView_shouldReorderColumn_toColumn<R = boolean, P0 = cocoa.NSOutlineView, P1 = number, P2 = number>(_outlineView: P0, _shouldReorderColumn: P1, _toColumn: P2): R;
    outlineView_sizeToFitWidthOfColumn<R = number, P0 = cocoa.NSOutlineView, P1 = number>(_outlineView: P0, _sizeToFitWidthOfColumn: P1): R;
    outlineView_willDisplayOutlineCell_forTableColumn_item<R = void, P0 = cocoa.NSOutlineView, P1 = unknown, P2 = cocoa.NSTableColumn, P3 = unknown>(_outlineView: P0, _willDisplayOutlineCell: P1, _forTableColumn: P2, _item: P3): R;
    outlineView_shouldCollapseItem<R = boolean, P0 = cocoa.NSOutlineView, P1 = unknown>(_outlineView: P0, _shouldCollapseItem: P1): R;
    outlineView_shouldExpandItem<R = boolean, P0 = cocoa.NSOutlineView, P1 = unknown>(_outlineView: P0, _shouldExpandItem: P1): R;
    outlineView_isGroupItem<R = boolean, P0 = cocoa.NSOutlineView, P1 = unknown>(_outlineView: P0, _isGroupItem: P1): R;
    outlineView_dataCellForTableColumn_item<R = cocoa.NSCell, P0 = cocoa.NSOutlineView, P1 = cocoa.NSTableColumn, P2 = unknown>(_outlineView: P0, _dataCellForTableColumn: P1, _item: P2): R;
    outlineView_shouldTrackCell_forTableColumn_item<R = boolean, P0 = cocoa.NSOutlineView, P1 = cocoa.NSCell, P2 = cocoa.NSTableColumn, P3 = unknown>(_outlineView: P0, _shouldTrackCell: P1, _forTableColumn: P2, _item: P3): R;
    outlineView_shouldShowCellExpansionForTableColumn_item<R = boolean, P0 = cocoa.NSOutlineView, P1 = cocoa.NSTableColumn, P2 = unknown>(_outlineView: P0, _shouldShowCellExpansionForTableColumn: P1, _item: P2): R;
    outlineView_shouldTypeSelectForEvent_withCurrentSearchString<R = boolean, P0 = cocoa.NSOutlineView, P1 = cocoa.NSEvent, P2 = cocoa.NSString>(_outlineView: P0, _shouldTypeSelectForEvent: P1, _withCurrentSearchString: P2): R;
    outlineView_nextTypeSelectMatchFromItem_toItem_forString<R = unknown, P0 = cocoa.NSOutlineView, P1 = unknown, P2 = unknown, P3 = cocoa.NSString>(_outlineView: P0, _nextTypeSelectMatchFromItem: P1, _toItem: P2, _forString: P3): R;
    outlineView_typeSelectStringForTableColumn_item<R = cocoa.NSString, P0 = cocoa.NSOutlineView, P1 = cocoa.NSTableColumn, P2 = unknown>(_outlineView: P0, _typeSelectStringForTableColumn: P1, _item: P2): R;
    outlineView_heightOfRowByItem<R = number, P0 = cocoa.NSOutlineView, P1 = unknown>(_outlineView: P0, _heightOfRowByItem: P1): R;
    outlineView_toolTipForCell_rect_tableColumn_item_mouseLocation<R = cocoa.NSString, P0 = cocoa.NSOutlineView, P1 = cocoa.NSCell, P2 = cocoa.CGRect, P3 = cocoa.NSTableColumn, P4 = unknown, P5 = cocoa.CGPoint>(_outlineView: P0, _toolTipForCell: P1, _rect: P2, _tableColumn: P3, _item: P4, _mouseLocation: P5): R;
    outlineView_didDragTableColumn<R = void, P0 = cocoa.NSOutlineView, P1 = cocoa.NSTableColumn>(_outlineView: P0, _didDragTableColumn: P1): R;
    outlineView_didClickTableColumn<R = void, P0 = cocoa.NSOutlineView, P1 = cocoa.NSTableColumn>(_outlineView: P0, _didClickTableColumn: P1): R;
    outlineView_mouseDownInHeaderOfTableColumn<R = void, P0 = cocoa.NSOutlineView, P1 = cocoa.NSTableColumn>(_outlineView: P0, _mouseDownInHeaderOfTableColumn: P1): R;
    outlineView_shouldSelectTableColumn<R = boolean, P0 = cocoa.NSOutlineView, P1 = cocoa.NSTableColumn>(_outlineView: P0, _shouldSelectTableColumn: P1): R;
    outlineView_selectionIndexesForProposedSelection<R = cocoa.NSIndexSet, P0 = cocoa.NSOutlineView, P1 = cocoa.NSIndexSet>(_outlineView: P0, _selectionIndexesForProposedSelection: P1): R;
    outlineView_shouldSelectItem<R = boolean, P0 = cocoa.NSOutlineView, P1 = unknown>(_outlineView: P0, _shouldSelectItem: P1): R;
    selectionShouldChangeInOutlineView<R = boolean, P0 = cocoa.NSOutlineView>(_selectionShouldChangeInOutlineView: P0): R;
    outlineView_shouldEditTableColumn_item<R = boolean, P0 = cocoa.NSOutlineView, P1 = cocoa.NSTableColumn, P2 = unknown>(_outlineView: P0, _shouldEditTableColumn: P1, _item: P2): R;
    outlineView_willDisplayCell_forTableColumn_item<R = void, P0 = cocoa.NSOutlineView, P1 = unknown, P2 = cocoa.NSTableColumn, P3 = unknown>(_outlineView: P0, _willDisplayCell: P1, _forTableColumn: P2, _item: P3): R;
    outlineView_didRemoveRowView_forRow<R = void, P0 = cocoa.NSOutlineView, P1 = cocoa.NSTableRowView, P2 = number>(_outlineView: P0, _didRemoveRowView: P1, _forRow: P2): R;
    outlineView_didAddRowView_forRow<R = void, P0 = cocoa.NSOutlineView, P1 = cocoa.NSTableRowView, P2 = number>(_outlineView: P0, _didAddRowView: P1, _forRow: P2): R;
    outlineView_rowViewForItem<R = cocoa.NSTableRowView, P0 = cocoa.NSOutlineView, P1 = unknown>(_outlineView: P0, _rowViewForItem: P1): R;
    outlineView_viewForTableColumn_item<R = cocoa.NSView, P0 = cocoa.NSOutlineView, P1 = cocoa.NSTableColumn, P2 = unknown>(_outlineView: P0, _viewForTableColumn: P1, _item: P2): R;
  }
  namespace classes {
    export interface NSOutlineViewDelegateProtocol<T = any> extends cocoa.classes.NSControlTextEditingDelegateProtocol {  }
  }
}

declare const NSOutlineViewDelegateProtocol: cocoa.classes.NSOutlineViewDelegateProtocol;
