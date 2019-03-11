/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableSimpleGrid<T = any> extends cocoa.MSImmutableBaseGrid {
    thickGridTimes<R = number>(): R;
    setThickGridTimes<R = void, P0 = number>(_v: P0): R;
    gridSize<R = number>(): R;
    setGridSize<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _MSImmutableSimpleGrid<T = any> extends cocoa.classes.MSImmutableBaseGrid {
      alloc<R = _MSImmutableSimpleGrid>(): R;
      new: <R = _MSImmutableSimpleGrid>() => R;
    }
  }
}
