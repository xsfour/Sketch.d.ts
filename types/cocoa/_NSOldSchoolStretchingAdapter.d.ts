/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSOldSchoolStretchingAdapter<T = any> extends _NSOldSchoolAdapter {}
  namespace classes {
    export interface _NSOldSchoolStretchingAdapter<T = any> extends _NSOldSchoolAdapter {
      alloc<R = _NSOldSchoolStretchingAdapter>(): R;
      new: <R = _NSOldSchoolStretchingAdapter>() => R;
    }
  }
}
