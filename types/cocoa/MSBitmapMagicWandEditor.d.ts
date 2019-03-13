/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBitmapMagicWandEditor<T = any> extends MSBitmapEditor {
    isValidRect<R = boolean, P0 = CGRect>(_isValidRect: P0): R;
    drawOvals<R = void>(): R;
    drawMask<R = void>(): R;
    tolerance<R = number>(): R;
    magicWandWithCompletionBlock<R = void, P0 = CDUnknownBlockType>(_magicWandWithCompletionBlock: P0): R;
    queue<R = NSOperationQueue>(): R;
    setQueue<R = void, P0 = NSOperationQueue>(_v: P0): R;
    didDrag<R = boolean>(): R;
    setDidDrag<R = void, P0 = boolean>(_v: P0): R;
    cachedBitSafeRep<R = NSBitmapImageRep>(): R;
    setCachedBitSafeRep<R = void, P0 = NSBitmapImageRep>(_v: P0): R;
    mask<R = NSBitmapImageRep>(): R;
    setMask<R = void, P0 = NSBitmapImageRep>(_v: P0): R;
    mouseEndPoint<R = CGPoint>(): R;
    setMouseEndPoint<R = void, P0 = CGPoint>(_v: P0): R;
    mouseDownPoint<R = CGPoint>(): R;
    setMouseDownPoint<R = void, P0 = CGPoint>(_v: P0): R;
    dragCirclePageBounds<R = CGRect>(): R;
    dragCircleBounds<R = CGRect>(): R;
  }
  namespace classes {
    export interface MSBitmapMagicWandEditor<T = any> extends MSBitmapEditor {
      alloc<R = MSBitmapMagicWandEditor>(): R;
      new: <R = MSBitmapMagicWandEditor>() => R;
    }
  }
}

declare const MSBitmapMagicWandEditor: cocoa.classes.MSBitmapMagicWandEditor;
