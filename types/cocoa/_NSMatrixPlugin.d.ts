/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSMatrixPlugin<T = any> extends cocoa._NSSelectionBinderPlugin {}
  namespace classes {
    export interface _NSMatrixPlugin<T = any> extends cocoa.classes._NSSelectionBinderPlugin {
      alloc<R = _NSMatrixPlugin>(): R;
      new: <R = _NSMatrixPlugin>() => R;
    }
  }
}
