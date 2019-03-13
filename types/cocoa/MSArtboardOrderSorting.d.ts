/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArtboardOrderSorting<T = any> extends NSObject {}
  namespace classes {
    export interface MSArtboardOrderSorting<T = any> extends NSObject {
      alloc<R = MSArtboardOrderSorting>(): R;
      new: <R = MSArtboardOrderSorting>() => R;
      sortArtboardsInDefaultOrder<R = unknown, P0 = unknown>(_sortArtboardsInDefaultOrder: P0): R;
      sortArtboards_inOrder<R = unknown, P0 = unknown, P1 = number>(_sortArtboards: P0, _inOrder: P1): R;
    }
  }
}

declare const MSArtboardOrderSorting: cocoa.classes.MSArtboardOrderSorting;
