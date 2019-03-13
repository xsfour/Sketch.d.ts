/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableSliceLayer<T = any> extends MSImmutableLayer {
    backgroundColor<R = MSImmutableColor>(): R;
    setBackgroundColor<R = void, P0 = MSImmutableColor>(_v: P0): R;
    hasBackgroundColor<R = boolean>(): R;
    setHasBackgroundColor<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface _MSImmutableSliceLayer<T = any> extends MSImmutableLayer {
      alloc<R = _MSImmutableSliceLayer>(): R;
      new: <R = _MSImmutableSliceLayer>() => R;
    }
  }
}
