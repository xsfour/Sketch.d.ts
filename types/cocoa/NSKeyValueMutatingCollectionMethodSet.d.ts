/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueMutatingCollectionMethodSet<T = any> extends NSObject {}
  namespace classes {
    export interface NSKeyValueMutatingCollectionMethodSet<T = any> extends NSObject {
      alloc<R = NSKeyValueMutatingCollectionMethodSet>(): R;
      new: <R = NSKeyValueMutatingCollectionMethodSet>() => R;
    }
  }
}

declare const NSKeyValueMutatingCollectionMethodSet: cocoa.classes.NSKeyValueMutatingCollectionMethodSet;
