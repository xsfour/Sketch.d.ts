/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBitmapRectangleEditor<T = any> extends cocoa.MSBitmapEditor {
    rectFromDraggingPoints<R = cocoa.CGRect>(): R;
    sizeForLabel<R = cocoa.CGSize>(): R;
    resetDraggingPoints<R = void>(): R;
    selectionBeforeDrag<R = cocoa.NSBezierPath>(): R;
    setSelectionBeforeDrag<R = void, P0 = cocoa.NSBezierPath>(_v: P0): R;
    mouseEndPoint<R = cocoa.CGPoint>(): R;
    setMouseEndPoint<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    mouseDownPoint<R = cocoa.CGPoint>(): R;
    setMouseDownPoint<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    didDrag<R = boolean>(): R;
    setDidDrag<R = void, P0 = boolean>(_v: P0): R;
    dragMode<R = number>(): R;
    setDragMode<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface MSBitmapRectangleEditor<T = any> extends cocoa.classes.MSBitmapEditor {
      alloc<R = MSBitmapRectangleEditor>(): R;
      new: <R = MSBitmapRectangleEditor>() => R;
      accumulateSelectionWithPrevious_draggingRect_dragMode<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_accumulateSelectionWithPrevious: P0, _draggingRect: P1, _dragMode: P2): R;
    }
  }
}

declare const MSBitmapRectangleEditor: cocoa.classes.MSBitmapRectangleEditor;
