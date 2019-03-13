/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueMutatingSetMethodSet<T = any> extends NSKeyValueMutatingCollectionMethodSet {}
  namespace classes {
    export interface NSKeyValueMutatingSetMethodSet<T = any> extends NSKeyValueMutatingCollectionMethodSet {
      alloc<R = NSKeyValueMutatingSetMethodSet>(): R;
      new: <R = NSKeyValueMutatingSetMethodSet>() => R;
    }
  }
}

declare const NSKeyValueMutatingSetMethodSet: cocoa.classes.NSKeyValueMutatingSetMethodSet;
