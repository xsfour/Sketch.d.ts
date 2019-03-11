/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueNonmutatingOrderedSetMethodSet<T = any> extends cocoa.NSKeyValueNonmutatingCollectionMethodSet {}
  namespace classes {
    export interface NSKeyValueNonmutatingOrderedSetMethodSet<T = any> extends cocoa.classes.NSKeyValueNonmutatingCollectionMethodSet {
      alloc<R = NSKeyValueNonmutatingOrderedSetMethodSet>(): R;
      new: <R = NSKeyValueNonmutatingOrderedSetMethodSet>() => R;
    }
  }
}

declare const NSKeyValueNonmutatingOrderedSetMethodSet: cocoa.classes.NSKeyValueNonmutatingOrderedSetMethodSet;
