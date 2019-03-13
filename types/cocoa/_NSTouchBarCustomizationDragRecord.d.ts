/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTouchBarCustomizationDragRecord<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    dealloc<R = void>(): R;
    initWithItem_coordinateSpace_originalLocation_dragLocation_dragType_anchorPoint<R = unknown, P0 = unknown, P1 = unknown, P2 = CGPoint, P3 = CGPoint, P4 = number, P5 = CGPoint>(_initWithItem: P0, _coordinateSpace: P1, _originalLocation: P2, _dragLocation: P3, _dragType: P4, _anchorPoint: P5): R;
    postReplacementInsertionIndexPath<R = NSIndexPath>(): R;
    setPostReplacementInsertionIndexPath<R = void, P0 = NSIndexPath>(_v: P0): R;
    backupDragSize<R = CGSize>(): R;
    setBackupDragSize<R = void, P0 = CGSize>(_v: P0): R;
    startTime<R = NSDate>(): R;
    pending<R = boolean>(): R;
    setPending<R = void, P0 = boolean>(_v: P0): R;
    replacedItems<R = NSArray>(): R;
    setReplacedItems<R = void, P0 = NSArray>(_v: P0): R;
    anchorPoint<R = CGPoint>(): R;
    dragType<R = number>(): R;
    dragLocation<R = CGPoint>(): R;
    setDragLocation<R = void, P0 = CGPoint>(_v: P0): R;
    originalLocation<R = CGPoint>(): R;
    coordinateSpace<R = NSView>(): R;
    draggedItem<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSTouchBarCustomizationDragRecord<T = any> extends NSObject {
      alloc<R = _NSTouchBarCustomizationDragRecord>(): R;
      new: <R = _NSTouchBarCustomizationDragRecord>() => R;
    }
  }
}
