/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableDragInfo<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    dropCandidateChildIndex<R = number>(): R;
    setDropCandidateChildIndex<R = void, P0 = number>(_v: P0): R;
    dropCandidateItem<R = unknown>(): R;
    setDropCandidateItem<R = void, P0 = unknown>(_v: P0): R;
    lastOffscreenDropIndicatorFrame<R = CGRect>(): R;
    setLastOffscreenDropIndicatorFrame<R = void, P0 = CGRect>(_v: P0): R;
    lastDropHoverSourceMask<R = number>(): R;
    setLastDropHoverSourceMask<R = void, P0 = number>(_v: P0): R;
    lastDropHoverRow<R = number>(): R;
    setLastDropHoverRow<R = void, P0 = number>(_v: P0): R;
    draggedRowIndexes<R = NSIndexSet>(): R;
    setDraggedRowIndexes<R = void, P0 = NSIndexSet>(_v: P0): R;
    tableViewDropOperation<R = number>(): R;
    setTableViewDropOperation<R = void, P0 = number>(_v: P0): R;
    dropCandidateParentRow<R = number>(): R;
    setDropCandidateParentRow<R = void, P0 = number>(_v: P0): R;
    dropCandidateRow<R = number>(): R;
    setDropCandidateRow<R = void, P0 = number>(_v: P0): R;
    dragOperation<R = number>(): R;
    setDragOperation<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface NSTableDragInfo<T = any> extends NSObject {
      alloc<R = NSTableDragInfo>(): R;
      new: <R = NSTableDragInfo>() => R;
    }
  }
}

declare const NSTableDragInfo: cocoa.classes.NSTableDragInfo;
