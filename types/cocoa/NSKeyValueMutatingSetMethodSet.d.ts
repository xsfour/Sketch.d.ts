/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueMutatingSetMethodSet<T = any> extends cocoa.NSKeyValueMutatingCollectionMethodSet {}
  namespace classes {
    export interface NSKeyValueMutatingSetMethodSet<T = any> extends cocoa.classes.NSKeyValueMutatingCollectionMethodSet {
      alloc<R = NSKeyValueMutatingSetMethodSet>(): R;
      new: <R = NSKeyValueMutatingSetMethodSet>() => R;
    }
  }
}

declare const NSKeyValueMutatingSetMethodSet: cocoa.classes.NSKeyValueMutatingSetMethodSet;
