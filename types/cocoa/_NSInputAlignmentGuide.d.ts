/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSInputAlignmentGuide<T = any> extends cocoa.NSObject {
    yDoubleValueAtIndex<R = number, P0 = number>(_yDoubleValueAtIndex: P0): R;
    xDoubleValueAtIndex<R = number, P0 = number>(_xDoubleValueAtIndex: P0): R;
    pointValueAtIndex<R = cocoa.CGPoint, P0 = number>(_pointValueAtIndex: P0): R;
    referenceValues<R = unknown>(): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface _NSInputAlignmentGuide<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSInputAlignmentGuide>(): R;
      new: <R = _NSInputAlignmentGuide>() => R;
    }
  }
}
