/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSimpleGrid<T0 = void, T1 = void, T2 = void> extends _MSSimpleGrid {}
  namespace MSSimpleGrid {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSSimpleGrid {
      alloc<R = MSSimpleGrid>(): R;
      new: <R = MSSimpleGrid>() => R;
    }
  }
}

declare const MSSimpleGrid: cocoa.MSSimpleGrid.CLASS;
