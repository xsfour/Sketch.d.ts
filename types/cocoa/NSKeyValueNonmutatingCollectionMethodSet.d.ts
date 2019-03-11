/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueNonmutatingCollectionMethodSet<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface NSKeyValueNonmutatingCollectionMethodSet<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSKeyValueNonmutatingCollectionMethodSet>(): R;
      new: <R = NSKeyValueNonmutatingCollectionMethodSet>() => R;
    }
  }
}

declare const NSKeyValueNonmutatingCollectionMethodSet: cocoa.classes.NSKeyValueNonmutatingCollectionMethodSet;
