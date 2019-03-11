/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBaseGrid<T = any> extends cocoa._MSBaseGrid {
    setIsEnabled<R = void, P0 = boolean>(_setIsEnabled: P0): R;
    horizontalGuidesForRulerData_inRect<R = unknown, P0 = unknown, P1 = cocoa.CGRect>(_horizontalGuidesForRulerData: P0, _inRect: P1): R;
    verticalGuidesForRulerData_inRect<R = unknown, P0 = unknown, P1 = cocoa.CGRect>(_verticalGuidesForRulerData: P0, _inRect: P1): R;
    forceDraw<R = boolean>(): R;
    setForceDraw<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface MSBaseGrid<T = any> extends cocoa.classes._MSBaseGrid {
      alloc<R = MSBaseGrid>(): R;
      new: <R = MSBaseGrid>() => R;
    }
  }
}

declare const MSBaseGrid: cocoa.classes.MSBaseGrid;
