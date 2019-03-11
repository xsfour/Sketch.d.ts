/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueMutatingCollectionMethodSet<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface NSKeyValueMutatingCollectionMethodSet<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSKeyValueMutatingCollectionMethodSet>(): R;
      new: <R = NSKeyValueMutatingCollectionMethodSet>() => R;
    }
  }
}

declare const NSKeyValueMutatingCollectionMethodSet: cocoa.classes.NSKeyValueMutatingCollectionMethodSet;
