/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableViewDataSourceProtocol<T = any> {
    tableView_namesOfPromisedFilesDroppedAtDestination_forDraggedRowsWithIndexes<R = cocoa.NSArray, P0 = cocoa.NSTableView, P1 = cocoa.NSURL, P2 = cocoa.NSIndexSet>(_tableView: P0, _namesOfPromisedFilesDroppedAtDestination: P1, _forDraggedRowsWithIndexes: P2): R;
    tableView_acceptDrop_row_dropOperation<R = boolean, P0 = cocoa.NSTableView, P1 = cocoa.NSDraggingInfo, P2 = number, P3 = number>(_tableView: P0, _acceptDrop: P1, _row: P2, _dropOperation: P3): R;
    tableView_validateDrop_proposedRow_proposedDropOperation<R = number, P0 = cocoa.NSTableView, P1 = cocoa.NSDraggingInfo, P2 = number, P3 = number>(_tableView: P0, _validateDrop: P1, _proposedRow: P2, _proposedDropOperation: P3): R;
    tableView_writeRowsWithIndexes_toPasteboard<R = boolean, P0 = cocoa.NSTableView, P1 = cocoa.NSIndexSet, P2 = cocoa.NSPasteboard>(_tableView: P0, _writeRowsWithIndexes: P1, _toPasteboard: P2): R;
    tableView_updateDraggingItemsForDrag<R = void, P0 = cocoa.NSTableView, P1 = cocoa.NSDraggingInfo>(_tableView: P0, _updateDraggingItemsForDrag: P1): R;
    tableView_draggingSession_endedAtPoint_operation<R = void, P0 = cocoa.NSTableView, P1 = cocoa.NSDraggingSession, P2 = cocoa.CGPoint, P3 = number>(_tableView: P0, _draggingSession: P1, _endedAtPoint: P2, _operation: P3): R;
    tableView_draggingSession_willBeginAtPoint_forRowIndexes<R = void, P0 = cocoa.NSTableView, P1 = cocoa.NSDraggingSession, P2 = cocoa.CGPoint, P3 = cocoa.NSIndexSet>(_tableView: P0, _draggingSession: P1, _willBeginAtPoint: P2, _forRowIndexes: P3): R;
    tableView_pasteboardWriterForRow<R = cocoa.NSPasteboardWriting, P0 = cocoa.NSTableView, P1 = number>(_tableView: P0, _pasteboardWriterForRow: P1): R;
    tableView_sortDescriptorsDidChange<R = void, P0 = cocoa.NSTableView, P1 = cocoa.NSArray>(_tableView: P0, _sortDescriptorsDidChange: P1): R;
    tableView_setObjectValue_forTableColumn_row<R = void, P0 = cocoa.NSTableView, P1 = unknown, P2 = cocoa.NSTableColumn, P3 = number>(_tableView: P0, _setObjectValue: P1, _forTableColumn: P2, _row: P3): R;
    tableView_objectValueForTableColumn_row<R = unknown, P0 = cocoa.NSTableView, P1 = cocoa.NSTableColumn, P2 = number>(_tableView: P0, _objectValueForTableColumn: P1, _row: P2): R;
    numberOfRowsInTableView<R = number, P0 = cocoa.NSTableView>(_numberOfRowsInTableView: P0): R;
  }
  namespace classes {
    export interface NSTableViewDataSourceProtocol<T = any> {  }
  }
}

declare const NSTableViewDataSourceProtocol: cocoa.classes.NSTableViewDataSourceProtocol;
