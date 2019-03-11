/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSMetadataQuerySortingPseudoItem<T = any> extends cocoa.NSObject {
    valueForKey<R = unknown, P0 = unknown>(_valueForKey: P0): R;
  }
  namespace classes {
    export interface _NSMetadataQuerySortingPseudoItem<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSMetadataQuerySortingPseudoItem>(): R;
      new: <R = _NSMetadataQuerySortingPseudoItem>() => R;
    }
  }
}
