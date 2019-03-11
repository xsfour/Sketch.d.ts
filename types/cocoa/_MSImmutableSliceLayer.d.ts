/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableSliceLayer<T = any> extends cocoa.MSImmutableLayer {
    backgroundColor<R = cocoa.MSImmutableColor>(): R;
    setBackgroundColor<R = void, P0 = cocoa.MSImmutableColor>(_v: P0): R;
    hasBackgroundColor<R = boolean>(): R;
    setHasBackgroundColor<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface _MSImmutableSliceLayer<T = any> extends cocoa.classes.MSImmutableLayer {
      alloc<R = _MSImmutableSliceLayer>(): R;
      new: <R = _MSImmutableSliceLayer>() => R;
    }
  }
}
