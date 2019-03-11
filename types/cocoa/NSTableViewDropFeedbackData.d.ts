/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableViewDropFeedbackData<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    draggedRowIndexes<R = cocoa.NSIndexSet>(): R;
    setDraggedRowIndexes<R = void, P0 = cocoa.NSIndexSet>(_v: P0): R;
    isTemporaryDrag<R = boolean>(): R;
    setIsTemporaryDrag<R = void, P0 = boolean>(_v: P0): R;
    isExternalDrag<R = boolean>(): R;
    setIsExternalDrag<R = void, P0 = boolean>(_v: P0): R;
    draggingAccepted<R = boolean>(): R;
    setDraggingAccepted<R = void, P0 = boolean>(_v: P0): R;
    startRow<R = number>(): R;
    setStartRow<R = void, P0 = number>(_v: P0): R;
    dropFeedbackViews<R = cocoa.NSMutableArray>(): R;
    setDropFeedbackViews<R = void, P0 = cocoa.NSMutableArray>(_v: P0): R;
  }
  namespace classes {
    export interface NSTableViewDropFeedbackData<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSTableViewDropFeedbackData>(): R;
      new: <R = NSTableViewDropFeedbackData>() => R;
    }
  }
}

declare const NSTableViewDropFeedbackData: cocoa.classes.NSTableViewDropFeedbackData;
