/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFCUncancellableBlockOperation<T = any> extends cocoa.NSBlockOperation {}
  namespace classes {
    export interface _NSFCUncancellableBlockOperation<T = any> extends cocoa.classes.NSBlockOperation {
      alloc<R = _NSFCUncancellableBlockOperation>(): R;
      new: <R = _NSFCUncancellableBlockOperation>() => R;
    }
  }
}
