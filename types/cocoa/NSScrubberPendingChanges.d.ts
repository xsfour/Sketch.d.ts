/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrubberPendingChanges<T = any> extends cocoa.NSObject {
    oldIndexForNewIndex<R = number, P0 = number>(_oldIndexForNewIndex: P0): R;
    stagedAttributesForIndex<R = unknown, P0 = number>(_stagedAttributesForIndex: P0): R;
    moveItemAtIndex_toIndex<R = void, P0 = number, P1 = number>(_moveItemAtIndex: P0, _toIndex: P1): R;
    reloadItemsAtIndexes<R = void, P0 = unknown>(_reloadItemsAtIndexes: P0): R;
    removeItemsAtIndexes<R = void, P0 = unknown>(_removeItemsAtIndexes: P0): R;
    insertItemsAtIndexes<R = void, P0 = unknown>(_insertItemsAtIndexes: P0): R;
    _indexSetForStagedAttributesFromGlobalIndexSet_truncatingLength<R = unknown, P0 = unknown, P1 = boolean>(__indexSetForStagedAttributesFromGlobalIndexSet: P0, _truncatingLength: P1): R;
    dealloc<R = void>(): R;
    initWithCurrentLayoutAttributes<R = unknown, P0 = unknown>(_initWithCurrentLayoutAttributes: P0): R;
    countDelta<R = number>(): R;
    stagedAttributesStart<R = number>(): R;
    stagedAttributes<R = cocoa.NSMutableArray>(): R;
    toReload<R = cocoa.NSMutableSet>(): R;
    toBeRemoved<R = cocoa.NSMutableSet>(): R;
    selectedIndex<R = number>(): R;
    setSelectedIndex<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface NSScrubberPendingChanges<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSScrubberPendingChanges>(): R;
      new: <R = NSScrubberPendingChanges>() => R;
    }
  }
}

declare const NSScrubberPendingChanges: cocoa.classes.NSScrubberPendingChanges;
