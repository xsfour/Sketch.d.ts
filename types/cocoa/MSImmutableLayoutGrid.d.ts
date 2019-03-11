/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableLayoutGrid<T = any> extends cocoa._MSImmutableLayoutGrid {}
  namespace classes {
    export interface MSImmutableLayoutGrid<T = any> extends cocoa.classes._MSImmutableLayoutGrid {
      alloc<R = MSImmutableLayoutGrid>(): R;
      new: <R = MSImmutableLayoutGrid>() => R;
    }
  }
}

declare const MSImmutableLayoutGrid: cocoa.classes.MSImmutableLayoutGrid;
