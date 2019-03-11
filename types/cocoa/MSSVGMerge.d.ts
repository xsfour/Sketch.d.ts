/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSVGMerge<T = any> extends cocoa.MSSVGfeFilterPrimitive {
    addMergeNodeNamed<R = void, P0 = unknown>(_addMergeNodeNamed: P0): R;
  }
  namespace classes {
    export interface MSSVGMerge<T = any> extends cocoa.classes.MSSVGfeFilterPrimitive {
      alloc<R = MSSVGMerge>(): R;
      new: <R = MSSVGMerge>() => R;
    }
  }
}

declare const MSSVGMerge: cocoa.classes.MSSVGMerge;
