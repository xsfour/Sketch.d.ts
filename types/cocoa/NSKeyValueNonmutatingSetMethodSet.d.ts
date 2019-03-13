/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueNonmutatingSetMethodSet<T = any> extends NSKeyValueNonmutatingCollectionMethodSet {}
  namespace classes {
    export interface NSKeyValueNonmutatingSetMethodSet<T = any> extends NSKeyValueNonmutatingCollectionMethodSet {
      alloc<R = NSKeyValueNonmutatingSetMethodSet>(): R;
      new: <R = NSKeyValueNonmutatingSetMethodSet>() => R;
    }
  }
}

declare const NSKeyValueNonmutatingSetMethodSet: cocoa.classes.NSKeyValueNonmutatingSetMethodSet;
