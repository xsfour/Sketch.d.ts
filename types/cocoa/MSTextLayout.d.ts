/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTextLayout<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    initWithBaselineOffsets_firstLineCapOffset_lineFragments_lineFragmentBounds<R = unknown, P0 = unknown, P1 = number, P2 = unknown, P3 = cocoa.CGRect>(_initWithBaselineOffsets: P0, _firstLineCapOffset: P1, _lineFragments: P2, _lineFragmentBounds: P3): R;
    firstLineCapOffset<R = number>(): R;
    lineFragmentBounds<R = cocoa.CGRect>(): R;
    lineFragmentRectangles<R = cocoa.NSArray>(): R;
    baselineOffsets<R = cocoa.NSArray>(): R;
    lastBaselineOffset<R = number>(): R;
    firstBaselineOffset<R = number>(): R;
  }
  namespace classes {
    export interface MSTextLayout<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSTextLayout>(): R;
      new: <R = MSTextLayout>() => R;
      textLayoutForLayoutManager<R = unknown, P0 = unknown>(_textLayoutForLayoutManager: P0): R;
    }
  }
}

declare const MSTextLayout: cocoa.classes.MSTextLayout;
