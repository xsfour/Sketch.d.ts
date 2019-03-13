/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFCUncancellableBlockOperation<T = any> extends NSBlockOperation {}
  namespace classes {
    export interface _NSFCUncancellableBlockOperation<T = any> extends NSBlockOperation {
      alloc<R = _NSFCUncancellableBlockOperation>(): R;
      new: <R = _NSFCUncancellableBlockOperation>() => R;
    }
  }
}
