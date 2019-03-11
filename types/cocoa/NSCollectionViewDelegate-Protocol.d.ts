/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCollectionViewDelegateProtocol<T = any> {
    collectionView_transitionLayoutForOldLayout_newLayout<R = cocoa.NSCollectionViewTransitionLayout, P0 = cocoa.NSCollectionView, P1 = cocoa.NSCollectionViewLayout, P2 = cocoa.NSCollectionViewLayout>(_collectionView: P0, _transitionLayoutForOldLayout: P1, _newLayout: P2): R;
    collectionView_didEndDisplayingSupplementaryView_forElementOfKind_atIndexPath<R = void, P0 = cocoa.NSCollectionView, P1 = cocoa.NSView, P2 = cocoa.NSString, P3 = cocoa.NSIndexPath>(_collectionView: P0, _didEndDisplayingSupplementaryView: P1, _forElementOfKind: P2, _atIndexPath: P3): R;
    collectionView_didEndDisplayingItem_forRepresentedObjectAtIndexPath<R = void, P0 = cocoa.NSCollectionView, P1 = cocoa.NSCollectionViewItem, P2 = cocoa.NSIndexPath>(_collectionView: P0, _didEndDisplayingItem: P1, _forRepresentedObjectAtIndexPath: P2): R;
    collectionView_willDisplaySupplementaryView_forElementKind_atIndexPath<R = void, P0 = cocoa.NSCollectionView, P1 = cocoa.NSView, P2 = cocoa.NSString, P3 = cocoa.NSIndexPath>(_collectionView: P0, _willDisplaySupplementaryView: P1, _forElementKind: P2, _atIndexPath: P3): R;
    collectionView_willDisplayItem_forRepresentedObjectAtIndexPath<R = void, P0 = cocoa.NSCollectionView, P1 = cocoa.NSCollectionViewItem, P2 = cocoa.NSIndexPath>(_collectionView: P0, _willDisplayItem: P1, _forRepresentedObjectAtIndexPath: P2): R;
    collectionView_didDeselectItemsAtIndexPaths<R = void, P0 = cocoa.NSCollectionView, P1 = cocoa.NSSet>(_collectionView: P0, _didDeselectItemsAtIndexPaths: P1): R;
    collectionView_didSelectItemsAtIndexPaths<R = void, P0 = cocoa.NSCollectionView, P1 = cocoa.NSSet>(_collectionView: P0, _didSelectItemsAtIndexPaths: P1): R;
    collectionView_shouldDeselectItemsAtIndexPaths<R = cocoa.NSSet, P0 = cocoa.NSCollectionView, P1 = cocoa.NSSet>(_collectionView: P0, _shouldDeselectItemsAtIndexPaths: P1): R;
    collectionView_shouldSelectItemsAtIndexPaths<R = cocoa.NSSet, P0 = cocoa.NSCollectionView, P1 = cocoa.NSSet>(_collectionView: P0, _shouldSelectItemsAtIndexPaths: P1): R;
    collectionView_didChangeItemsAtIndexPaths_toHighlightState<R = void, P0 = cocoa.NSCollectionView, P1 = cocoa.NSSet, P2 = number>(_collectionView: P0, _didChangeItemsAtIndexPaths: P1, _toHighlightState: P2): R;
    collectionView_shouldChangeItemsAtIndexPaths_toHighlightState<R = cocoa.NSSet, P0 = cocoa.NSCollectionView, P1 = cocoa.NSSet, P2 = number>(_collectionView: P0, _shouldChangeItemsAtIndexPaths: P1, _toHighlightState: P2): R;
    collectionView_updateDraggingItemsForDrag<R = void, P0 = cocoa.NSCollectionView, P1 = cocoa.NSDraggingInfo>(_collectionView: P0, _updateDraggingItemsForDrag: P1): R;
    collectionView_draggingSession_endedAtPoint_dragOperation<R = void, P0 = cocoa.NSCollectionView, P1 = cocoa.NSDraggingSession, P2 = cocoa.CGPoint, P3 = number>(_collectionView: P0, _draggingSession: P1, _endedAtPoint: P2, _dragOperation: P3): R;
    collectionView_draggingSession_willBeginAtPoint_forItemsAtIndexes<R = void, P0 = cocoa.NSCollectionView, P1 = cocoa.NSDraggingSession, P2 = cocoa.CGPoint, P3 = cocoa.NSIndexSet>(_collectionView: P0, _draggingSession: P1, _willBeginAtPoint: P2, _forItemsAtIndexes: P3): R;
    collectionView_draggingSession_willBeginAtPoint_forItemsAtIndexPaths<R = void, P0 = cocoa.NSCollectionView, P1 = cocoa.NSDraggingSession, P2 = cocoa.CGPoint, P3 = cocoa.NSSet>(_collectionView: P0, _draggingSession: P1, _willBeginAtPoint: P2, _forItemsAtIndexPaths: P3): R;
    collectionView_pasteboardWriterForItemAtIndex<R = cocoa.NSPasteboardWriting, P0 = cocoa.NSCollectionView, P1 = number>(_collectionView: P0, _pasteboardWriterForItemAtIndex: P1): R;
    collectionView_pasteboardWriterForItemAtIndexPath<R = cocoa.NSPasteboardWriting, P0 = cocoa.NSCollectionView, P1 = cocoa.NSIndexPath>(_collectionView: P0, _pasteboardWriterForItemAtIndexPath: P1): R;
    collectionView_acceptDrop_index_dropOperation<R = boolean, P0 = cocoa.NSCollectionView, P1 = cocoa.NSDraggingInfo, P2 = number, P3 = number>(_collectionView: P0, _acceptDrop: P1, _index: P2, _dropOperation: P3): R;
    collectionView_acceptDrop_indexPath_dropOperation<R = boolean, P0 = cocoa.NSCollectionView, P1 = cocoa.NSDraggingInfo, P2 = cocoa.NSIndexPath, P3 = number>(_collectionView: P0, _acceptDrop: P1, _indexPath: P2, _dropOperation: P3): R;
    collectionView_validateDrop_proposedIndex_dropOperation<R = number, P0 = cocoa.NSCollectionView, P1 = cocoa.NSDraggingInfo, P2 = number, P3 = number>(_collectionView: P0, _validateDrop: P1, _proposedIndex: P2, _dropOperation: P3): R;
    collectionView_validateDrop_proposedIndexPath_dropOperation<R = number, P0 = cocoa.NSCollectionView, P1 = cocoa.NSDraggingInfo, P2 = unknown, P3 = number>(_collectionView: P0, _validateDrop: P1, _proposedIndexPath: P2, _dropOperation: P3): R;
    collectionView_draggingImageForItemsAtIndexes_withEvent_offset<R = cocoa.NSImage, P0 = cocoa.NSCollectionView, P1 = cocoa.NSIndexSet, P2 = cocoa.NSEvent, P3 = cocoa.CGPoint>(_collectionView: P0, _draggingImageForItemsAtIndexes: P1, _withEvent: P2, _offset: P3): R;
    collectionView_draggingImageForItemsAtIndexPaths_withEvent_offset<R = cocoa.NSImage, P0 = cocoa.NSCollectionView, P1 = cocoa.NSSet, P2 = cocoa.NSEvent, P3 = cocoa.CGPoint>(_collectionView: P0, _draggingImageForItemsAtIndexPaths: P1, _withEvent: P2, _offset: P3): R;
    collectionView_namesOfPromisedFilesDroppedAtDestination_forDraggedItemsAtIndexes<R = cocoa.NSArray, P0 = cocoa.NSCollectionView, P1 = cocoa.NSURL, P2 = cocoa.NSIndexSet>(_collectionView: P0, _namesOfPromisedFilesDroppedAtDestination: P1, _forDraggedItemsAtIndexes: P2): R;
    collectionView_namesOfPromisedFilesDroppedAtDestination_forDraggedItemsAtIndexPaths<R = cocoa.NSArray, P0 = cocoa.NSCollectionView, P1 = cocoa.NSURL, P2 = cocoa.NSSet>(_collectionView: P0, _namesOfPromisedFilesDroppedAtDestination: P1, _forDraggedItemsAtIndexPaths: P2): R;
    collectionView_writeItemsAtIndexes_toPasteboard<R = boolean, P0 = cocoa.NSCollectionView, P1 = cocoa.NSIndexSet, P2 = cocoa.NSPasteboard>(_collectionView: P0, _writeItemsAtIndexes: P1, _toPasteboard: P2): R;
    collectionView_writeItemsAtIndexPaths_toPasteboard<R = boolean, P0 = cocoa.NSCollectionView, P1 = cocoa.NSSet, P2 = cocoa.NSPasteboard>(_collectionView: P0, _writeItemsAtIndexPaths: P1, _toPasteboard: P2): R;
    collectionView_canDragItemsAtIndexes_withEvent<R = boolean, P0 = cocoa.NSCollectionView, P1 = cocoa.NSIndexSet, P2 = cocoa.NSEvent>(_collectionView: P0, _canDragItemsAtIndexes: P1, _withEvent: P2): R;
    collectionView_canDragItemsAtIndexPaths_withEvent<R = boolean, P0 = cocoa.NSCollectionView, P1 = cocoa.NSSet, P2 = cocoa.NSEvent>(_collectionView: P0, _canDragItemsAtIndexPaths: P1, _withEvent: P2): R;
  }
  namespace classes {
    export interface NSCollectionViewDelegateProtocol<T = any> {  }
  }
}

declare const NSCollectionViewDelegateProtocol: cocoa.classes.NSCollectionViewDelegateProtocol;
