/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueMutatingArrayMethodSet<T = any> extends NSKeyValueMutatingCollectionMethodSet {}
  namespace classes {
    export interface NSKeyValueMutatingArrayMethodSet<T = any> extends NSKeyValueMutatingCollectionMethodSet {
      alloc<R = NSKeyValueMutatingArrayMethodSet>(): R;
      new: <R = NSKeyValueMutatingArrayMethodSet>() => R;
    }
  }
}

declare const NSKeyValueMutatingArrayMethodSet: cocoa.classes.NSKeyValueMutatingArrayMethodSet;
