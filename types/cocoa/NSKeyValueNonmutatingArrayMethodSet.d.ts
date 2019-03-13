/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueNonmutatingArrayMethodSet<T = any> extends NSKeyValueNonmutatingCollectionMethodSet {}
  namespace classes {
    export interface NSKeyValueNonmutatingArrayMethodSet<T = any> extends NSKeyValueNonmutatingCollectionMethodSet {
      alloc<R = NSKeyValueNonmutatingArrayMethodSet>(): R;
      new: <R = NSKeyValueNonmutatingArrayMethodSet>() => R;
    }
  }
}

declare const NSKeyValueNonmutatingArrayMethodSet: cocoa.classes.NSKeyValueNonmutatingArrayMethodSet;
