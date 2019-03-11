/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSObservableKeyPathChangeAdaptor<T = any> extends cocoa.NSObservableKeyPath {}
  namespace classes {
    export interface _NSObservableKeyPathChangeAdaptor<T = any> extends cocoa.classes.NSObservableKeyPath {
      alloc<R = _NSObservableKeyPathChangeAdaptor>(): R;
      new: <R = _NSObservableKeyPathChangeAdaptor>() => R;
    }
  }
}
