/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableSimpleGrid<T = any> extends _MSImmutableSimpleGrid {}
  namespace classes {
    export interface MSImmutableSimpleGrid<T = any> extends _MSImmutableSimpleGrid {
      alloc<R = MSImmutableSimpleGrid>(): R;
      new: <R = MSImmutableSimpleGrid>() => R;
    }
  }
}

declare const MSImmutableSimpleGrid: cocoa.classes.MSImmutableSimpleGrid;
