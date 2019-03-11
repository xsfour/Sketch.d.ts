/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBitmapMagicWandEditor<T = any> extends cocoa.MSBitmapEditor {
    isValidRect<R = boolean, P0 = cocoa.CGRect>(_isValidRect: P0): R;
    drawOvals<R = void>(): R;
    drawMask<R = void>(): R;
    tolerance<R = number>(): R;
    magicWandWithCompletionBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_magicWandWithCompletionBlock: P0): R;
    queue<R = cocoa.NSOperationQueue>(): R;
    setQueue<R = void, P0 = cocoa.NSOperationQueue>(_v: P0): R;
    didDrag<R = boolean>(): R;
    setDidDrag<R = void, P0 = boolean>(_v: P0): R;
    cachedBitSafeRep<R = cocoa.NSBitmapImageRep>(): R;
    setCachedBitSafeRep<R = void, P0 = cocoa.NSBitmapImageRep>(_v: P0): R;
    mask<R = cocoa.NSBitmapImageRep>(): R;
    setMask<R = void, P0 = cocoa.NSBitmapImageRep>(_v: P0): R;
    mouseEndPoint<R = cocoa.CGPoint>(): R;
    setMouseEndPoint<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    mouseDownPoint<R = cocoa.CGPoint>(): R;
    setMouseDownPoint<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
    dragCirclePageBounds<R = cocoa.CGRect>(): R;
    dragCircleBounds<R = cocoa.CGRect>(): R;
  }
  namespace classes {
    export interface MSBitmapMagicWandEditor<T = any> extends cocoa.classes.MSBitmapEditor {
      alloc<R = MSBitmapMagicWandEditor>(): R;
      new: <R = MSBitmapMagicWandEditor>() => R;
    }
  }
}

declare const MSBitmapMagicWandEditor: cocoa.classes.MSBitmapMagicWandEditor;
