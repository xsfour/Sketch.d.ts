/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPointArray<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol {
    cxx_destruct<R = void>(): R;
    treeAsDictionary<R = unknown>(): R;
    description<R = unknown>(): R;
    replacePointAtIndex_withPoint<R = void, P0 = number, P1 = cocoa.CGPoint>(_replacePointAtIndex: P0, _withPoint: P1): R;
    countOfPoints<R = number>(): R;
    removePoint<R = void, P0 = cocoa.CGPoint>(_removePoint: P0): R;
    removePointAtIndex<R = void, P0 = number>(_removePointAtIndex: P0): R;
    pointAtIndex<R = cocoa.CGPoint, P0 = number>(_pointAtIndex: P0): R;
    insertPoint_atIndex<R = void, P0 = cocoa.CGPoint, P1 = number>(_insertPoint: P0, _atIndex: P1): R;
    addPoint<R = void, P0 = cocoa.CGPoint>(_addPoint: P0): R;
    points<R = cocoa.NSMutableArray>(): R;
    setPoints<R = void, P0 = cocoa.NSMutableArray>(_v: P0): R;
  }
  namespace classes {
    export interface MSPointArray<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol {
      alloc<R = MSPointArray>(): R;
      new: <R = MSPointArray>() => R;
    }
  }
}

declare const MSPointArray: cocoa.classes.MSPointArray;
