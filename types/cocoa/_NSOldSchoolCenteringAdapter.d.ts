/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSOldSchoolCenteringAdapter<T = any> extends cocoa._NSOldSchoolAdapter {}
  namespace classes {
    export interface _NSOldSchoolCenteringAdapter<T = any> extends cocoa.classes._NSOldSchoolAdapter {
      alloc<R = _NSOldSchoolCenteringAdapter>(): R;
      new: <R = _NSOldSchoolCenteringAdapter>() => R;
    }
  }
}
