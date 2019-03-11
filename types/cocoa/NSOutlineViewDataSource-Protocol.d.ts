/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOutlineViewDataSourceProtocol<T = any> extends cocoa.NSObjectProtocol {
    outlineView_namesOfPromisedFilesDroppedAtDestination_forDraggedItems<R = cocoa.NSArray, P0 = cocoa.NSOutlineView, P1 = cocoa.NSURL, P2 = cocoa.NSArray>(_outlineView: P0, _namesOfPromisedFilesDroppedAtDestination: P1, _forDraggedItems: P2): R;
    outlineView_acceptDrop_item_childIndex<R = boolean, P0 = cocoa.NSOutlineView, P1 = cocoa.NSDraggingInfo, P2 = unknown, P3 = number>(_outlineView: P0, _acceptDrop: P1, _item: P2, _childIndex: P3): R;
    outlineView_validateDrop_proposedItem_proposedChildIndex<R = number, P0 = cocoa.NSOutlineView, P1 = cocoa.NSDraggingInfo, P2 = unknown, P3 = number>(_outlineView: P0, _validateDrop: P1, _proposedItem: P2, _proposedChildIndex: P3): R;
    outlineView_updateDraggingItemsForDrag<R = void, P0 = cocoa.NSOutlineView, P1 = cocoa.NSDraggingInfo>(_outlineView: P0, _updateDraggingItemsForDrag: P1): R;
    outlineView_writeItems_toPasteboard<R = boolean, P0 = cocoa.NSOutlineView, P1 = cocoa.NSArray, P2 = cocoa.NSPasteboard>(_outlineView: P0, _writeItems: P1, _toPasteboard: P2): R;
    outlineView_draggingSession_endedAtPoint_operation<R = void, P0 = cocoa.NSOutlineView, P1 = cocoa.NSDraggingSession, P2 = cocoa.CGPoint, P3 = number>(_outlineView: P0, _draggingSession: P1, _endedAtPoint: P2, _operation: P3): R;
    outlineView_draggingSession_willBeginAtPoint_forItems<R = void, P0 = cocoa.NSOutlineView, P1 = cocoa.NSDraggingSession, P2 = cocoa.CGPoint, P3 = cocoa.NSArray>(_outlineView: P0, _draggingSession: P1, _willBeginAtPoint: P2, _forItems: P3): R;
    outlineView_pasteboardWriterForItem<R = cocoa.NSPasteboardWriting, P0 = cocoa.NSOutlineView, P1 = unknown>(_outlineView: P0, _pasteboardWriterForItem: P1): R;
    outlineView_sortDescriptorsDidChange<R = void, P0 = cocoa.NSOutlineView, P1 = cocoa.NSArray>(_outlineView: P0, _sortDescriptorsDidChange: P1): R;
    outlineView_persistentObjectForItem<R = unknown, P0 = cocoa.NSOutlineView, P1 = unknown>(_outlineView: P0, _persistentObjectForItem: P1): R;
    outlineView_itemForPersistentObject<R = unknown, P0 = cocoa.NSOutlineView, P1 = unknown>(_outlineView: P0, _itemForPersistentObject: P1): R;
    outlineView_setObjectValue_forTableColumn_byItem<R = void, P0 = cocoa.NSOutlineView, P1 = unknown, P2 = cocoa.NSTableColumn, P3 = unknown>(_outlineView: P0, _setObjectValue: P1, _forTableColumn: P2, _byItem: P3): R;
    outlineView_objectValueForTableColumn_byItem<R = unknown, P0 = cocoa.NSOutlineView, P1 = cocoa.NSTableColumn, P2 = unknown>(_outlineView: P0, _objectValueForTableColumn: P1, _byItem: P2): R;
    outlineView_isItemExpandable<R = boolean, P0 = cocoa.NSOutlineView, P1 = unknown>(_outlineView: P0, _isItemExpandable: P1): R;
    outlineView_child_ofItem<R = unknown, P0 = cocoa.NSOutlineView, P1 = number, P2 = unknown>(_outlineView: P0, _child: P1, _ofItem: P2): R;
    outlineView_numberOfChildrenOfItem<R = number, P0 = cocoa.NSOutlineView, P1 = unknown>(_outlineView: P0, _numberOfChildrenOfItem: P1): R;
  }
  namespace classes {
    export interface NSOutlineViewDataSourceProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSOutlineViewDataSourceProtocol: cocoa.classes.NSOutlineViewDataSourceProtocol;
