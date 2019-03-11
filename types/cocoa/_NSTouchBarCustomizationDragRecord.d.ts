/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTouchBarCustomizationDragRecord<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    dealloc<R = void>(): R;
    initWithItem_coordinateSpace_originalLocation_dragLocation_dragType_anchorPoint<R = unknown, P0 = unknown, P1 = unknown, P2 = cocoa.CGPoint, P3 = cocoa.CGPoint, P4 = number, P5 = cocoa.CGPoint>(_initWithItem: P0, _coordinateSpace: P1, _originalLocation: P2, _dragLocation: P3, _dragType: P4, _anchorPoint: P5): R;
    postReplacementInsertionIndexPath<R = cocoa.NSIndexPath>(): R;
    setPostReplacementInsertionIndexPath<R = void, P0 = cocoa.NSIndexPath>(_v: P0): R;
    backupDragSize<R = cocoa.CGSize>(): R;
    setBackupDragSize<R = void, P0 = cocoa.CGSize>(_v: P0): R;
    startTime<R = cocoa.NSDate>(): R;
    pending<R = boolean>(): R;
    setPending<R = void, P0 = boolean>(_v: P0): R;
    replacedItems<R = cocoa.NSArray>(): R;
    setReplacedItems<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    anchorPoint<R = cocoa.CGPoint>(): R;
    dragType<R = number>(): R;
    dragLocation<R = cocoa.CGPoint>(): R;
    setDragLocation<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    originalLocation<R = cocoa.CGPoint>(): R;
    coordinateSpace<R = cocoa.NSView>(): R;
    draggedItem<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSTouchBarCustomizationDragRecord<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSTouchBarCustomizationDragRecord>(): R;
      new: <R = _NSTouchBarCustomizationDragRecord>() => R;
    }
  }
}
