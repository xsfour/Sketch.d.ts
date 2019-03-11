/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSegmentedControlAux<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface _NSSegmentedControlAux<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSSegmentedControlAux>(): R;
      new: <R = _NSSegmentedControlAux>() => R;
    }
  }
}
