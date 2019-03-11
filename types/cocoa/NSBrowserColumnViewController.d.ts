/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBrowserColumnViewController<T = any> extends cocoa.NSViewController {
    noteHeightOfRowsWithIndexesChanged<R = void, P0 = unknown>(_noteHeightOfRowsWithIndexesChanged: P0): R;
    rowHeight<R = number>(): R;
    setRowHeight<R = void, P0 = number>(_setRowHeight: P0): R;
    sizeToFitWidth<R = void, P0 = number>(_sizeToFitWidth: P0): R;
    widthThatFits<R = number>(): R;
    objectValueForItem<R = unknown, P0 = unknown>(_objectValueForItem: P0): R;
    isLeafItem<R = boolean, P0 = unknown>(_isLeafItem: P0): R;
    childItemAtIndex<R = unknown, P0 = number>(_childItemAtIndex: P0): R;
    numberOfChildItems<R = number>(): R;
    dragImageForRowsWithIndexes_withEvent_offset<R = unknown, P0 = unknown, P1 = unknown, P2 = cocoa.CGPoint>(_dragImageForRowsWithIndexes: P0, _withEvent: P1, _offset: P2): R;
    frameOfRow<R = cocoa.CGRect, P0 = number>(_frameOfRow: P0): R;
    rowAtPoint<R = number, P0 = cocoa.CGPoint>(_rowAtPoint: P0): R;
    setNeedsDisplayInRow<R = void, P0 = number>(_setNeedsDisplayInRow: P0): R;
    editRow_withEvent_select<R = void, P0 = number, P1 = unknown, P2 = boolean>(_editRow: P0, _withEvent: P1, _select: P2): R;
    preparedCellAtRow<R = unknown, P0 = number>(_preparedCellAtRow: P0): R;
    isExpandableRow<R = boolean, P0 = number>(_isExpandableRow: P0): R;
    isLeafRow<R = boolean, P0 = number>(_isLeafRow: P0): R;
    titleOfSelectedRow<R = unknown>(): R;
    scrollRowToCenter<R = void, P0 = number>(_scrollRowToCenter: P0): R;
    reloadDataForRowIndexes<R = void, P0 = unknown>(_reloadDataForRowIndexes: P0): R;
    reloadData<R = void>(): R;
    didChangeColumnSize<R = void>(): R;
    didEndResizingColumn<R = void, P0 = number>(_didEndResizingColumn: P0): R;
    willBeginResizingColumn<R = void, P0 = number>(_willBeginResizingColumn: P0): R;
    nextValidRowIndexAfterIndex<R = number, P0 = number>(_nextValidRowIndexAfterIndex: P0): R;
    currentTypeSelectSearchString<R = unknown>(): R;
    setBackgroundColor<R = void, P0 = unknown>(_setBackgroundColor: P0): R;
    setView<R = void, P0 = unknown>(_setView: P0): R;
    setColumnView_forcingFlippedBehavior<R = void, P0 = unknown, P1 = boolean>(_setColumnView: P0, _forcingFlippedBehavior: P1): R;
    description<R = unknown>(): R;
    columnView<R = cocoa.NSView>(): R;
    setColumnView<R = void, P0 = cocoa.NSView>(_v: P0): R;
    columnIndex<R = number>(): R;
    setColumnIndex<R = void, P0 = number>(_v: P0): R;
    headerViewController<R = cocoa.NSViewController>(): R;
    setHeaderViewController<R = void, P0 = cocoa.NSViewController>(_v: P0): R;
    browser<R = cocoa.NSBrowser>(): R;
    setBrowser<R = void, P0 = cocoa.NSBrowser>(_v: P0): R;
    menu<R = cocoa.NSMenu>(): R;
    setMenu<R = void, P0 = cocoa.NSMenu>(_v: P0): R;
    selectedRow<R = number>(): R;
    selectedItems<R = cocoa.NSArray>(): R;
    selectionIndexes<R = cocoa.NSIndexSet>(): R;
    setSelectionIndexes<R = void, P0 = cocoa.NSIndexSet>(_v: P0): R;
    firstValidRowIndex<R = number>(): R;
    numberOfRows<R = number>(): R;
    allowsTypeSelect<R = boolean>(): R;
    setAllowsTypeSelect<R = void, P0 = boolean>(_v: P0): R;
    drawsBackground<R = boolean>(): R;
    setDrawsBackground<R = void, P0 = boolean>(_v: P0): R;
    allowsEmptySelection<R = boolean>(): R;
    setAllowsEmptySelection<R = void, P0 = boolean>(_v: P0): R;
    allowsMultipleSelection<R = boolean>(): R;
    setAllowsMultipleSelection<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface NSBrowserColumnViewController<T = any> extends cocoa.classes.NSViewController {
      alloc<R = NSBrowserColumnViewController>(): R;
      new: <R = NSBrowserColumnViewController>() => R;
    }
  }
}

declare const NSBrowserColumnViewController: cocoa.classes.NSBrowserColumnViewController;
