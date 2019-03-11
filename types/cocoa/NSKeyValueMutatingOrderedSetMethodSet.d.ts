/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueMutatingOrderedSetMethodSet<T = any> extends cocoa.NSKeyValueMutatingCollectionMethodSet {}
  namespace classes {
    export interface NSKeyValueMutatingOrderedSetMethodSet<T = any> extends cocoa.classes.NSKeyValueMutatingCollectionMethodSet {
      alloc<R = NSKeyValueMutatingOrderedSetMethodSet>(): R;
      new: <R = NSKeyValueMutatingOrderedSetMethodSet>() => R;
    }
  }
}

declare const NSKeyValueMutatingOrderedSetMethodSet: cocoa.classes.NSKeyValueMutatingOrderedSetMethodSet;
