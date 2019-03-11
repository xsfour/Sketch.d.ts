/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueNonmutatingSetMethodSet<T = any> extends cocoa.NSKeyValueNonmutatingCollectionMethodSet {}
  namespace classes {
    export interface NSKeyValueNonmutatingSetMethodSet<T = any> extends cocoa.classes.NSKeyValueNonmutatingCollectionMethodSet {
      alloc<R = NSKeyValueNonmutatingSetMethodSet>(): R;
      new: <R = NSKeyValueNonmutatingSetMethodSet>() => R;
    }
  }
}

declare const NSKeyValueNonmutatingSetMethodSet: cocoa.classes.NSKeyValueNonmutatingSetMethodSet;
