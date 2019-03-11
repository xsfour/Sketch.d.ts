/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableUpdateData<T = any> extends cocoa.NSObject {
    hasChanges<R = boolean>(): R;
    dealloc<R = void>(): R;
    updateItemsToRemove<R = cocoa.NSMutableArray>(): R;
    setUpdateItemsToRemove<R = void, P0 = cocoa.NSMutableArray>(_v: P0): R;
    views<R = cocoa.NSMutableArray>(): R;
    setViews<R = void, P0 = cocoa.NSMutableArray>(_v: P0): R;
    containsInserts<R = boolean>(): R;
    setContainsInserts<R = void, P0 = boolean>(_v: P0): R;
    containsMoves<R = boolean>(): R;
    setContainsMoves<R = void, P0 = boolean>(_v: P0): R;
    containsSwipeToDelete<R = boolean>(): R;
    setContainsSwipeToDelete<R = void, P0 = boolean>(_v: P0): R;
    containsSlideDeletes<R = boolean>(): R;
    setContainsSlideDeletes<R = void, P0 = boolean>(_v: P0): R;
    containsDeletes<R = boolean>(): R;
    setContainsDeletes<R = void, P0 = boolean>(_v: P0): R;
    rowIndexesToViews<R = cocoa.NSMutableIndexSet>(): R;
    setRowIndexesToViews<R = void, P0 = cocoa.NSMutableIndexSet>(_v: P0): R;
    priorGroupRowIndexes<R = cocoa.NSIndexSet>(): R;
    setPriorGroupRowIndexes<R = void, P0 = cocoa.NSIndexSet>(_v: P0): R;
    priorColumnWidths<R = cocoa.NSArray>(): R;
    setPriorColumnWidths<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    priorRowHeightStorage<R = cocoa._NSTableRowHeightStorage>(): R;
    setPriorRowHeightStorage<R = void, P0 = cocoa._NSTableRowHeightStorage>(_v: P0): R;
    updateCount<R = number>(): R;
    setUpdateCount<R = void, P0 = number>(_v: P0): R;
    needsFrameUpdate<R = boolean>(): R;
    setNeedsFrameUpdate<R = void, P0 = boolean>(_v: P0): R;
    allRowsToInsert<R = cocoa.NSMutableIndexSet>(): R;
    setAllRowsToInsert<R = void, P0 = cocoa.NSMutableIndexSet>(_v: P0): R;
    allRowsToDelete<R = cocoa.NSMutableIndexSet>(): R;
    setAllRowsToDelete<R = void, P0 = cocoa.NSMutableIndexSet>(_v: P0): R;
    containsAnimations<R = boolean>(): R;
    setContainsAnimations<R = void, P0 = boolean>(_v: P0): R;
    selectionChanged<R = boolean>(): R;
    setSelectionChanged<R = void, P0 = boolean>(_v: P0): R;
    updateItemsToInsert<R = cocoa.NSMutableArray>(): R;
    setUpdateItemsToInsert<R = void, P0 = cocoa.NSMutableArray>(_v: P0): R;
    rowHeightsChanged<R = boolean>(): R;
    setRowHeightsChanged<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface NSTableUpdateData<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSTableUpdateData>(): R;
      new: <R = NSTableUpdateData>() => R;
    }
  }
}

declare const NSTableUpdateData: cocoa.classes.NSTableUpdateData;
