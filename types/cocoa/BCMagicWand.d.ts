/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCMagicWand<T = any> extends cocoa.NSOperation {
    cxx_destruct<R = void>(): R;
    nextUnvisitedPoint<R = cocoa.CGPoint>(): R;
    pushVisit<R = void, P0 = cocoa.CGPoint>(_pushVisit: P0): R;
    collectVisitsForPoint<R = void, P0 = cocoa.CGPoint>(_collectVisitsForPoint: P0): R;
    pointMatch<R = boolean, P0 = cocoa.CGPoint>(_pointMatch: P0): R;
    run<R = void>(): R;
    setUpMaskImage<R = void>(): R;
    nextVisits<R = number>(): R;
    setNextVisits<R = void, P0 = number>(_v: P0): R;
    planned<R = string>(): R;
    setPlanned<R = void, P0 = string>(_v: P0): R;
    reference<R = cocoa.BCPixel>(): R;
    setReference<R = void, P0 = cocoa.BCPixel>(_v: P0): R;
    visitedIndex<R = number>(): R;
    setVisitedIndex<R = void, P0 = number>(_v: P0): R;
    unvisitedIndex<R = number>(): R;
    setUnvisitedIndex<R = void, P0 = number>(_v: P0): R;
    mask<R = cocoa.BCPixel>(): R;
    setMask<R = void, P0 = cocoa.BCPixel>(_v: P0): R;
    pixels<R = cocoa.BCPixel>(): R;
    setPixels<R = void, P0 = cocoa.BCPixel>(_v: P0): R;
    maskImage<R = cocoa.NSBitmapImageRep>(): R;
    setMaskImage<R = void, P0 = cocoa.NSBitmapImageRep>(_v: P0): R;
    wandCompletionBlock<R = cocoa.CDUnknownBlockType>(): R;
    setWandCompletionBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    bitmap<R = cocoa.NSBitmapImageRep>(): R;
    setBitmap<R = void, P0 = cocoa.NSBitmapImageRep>(_v: P0): R;
    tolerance<R = number>(): R;
    setTolerance<R = void, P0 = number>(_v: P0): R;
    startPoint<R = cocoa.CGPoint>(): R;
    setStartPoint<R = void, P0 = cocoa.CGPoint>(_v: P0): R;
  }
  namespace classes {
    export interface BCMagicWand<T = any> extends cocoa.classes.NSOperation {
      alloc<R = BCMagicWand>(): R;
      new: <R = BCMagicWand>() => R;
    }
  }
}

declare const BCMagicWand: cocoa.classes.BCMagicWand;
