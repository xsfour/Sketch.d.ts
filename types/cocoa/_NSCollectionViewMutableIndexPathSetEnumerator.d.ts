/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCollectionViewMutableIndexPathSetEnumerator<T = any> extends cocoa.NSEnumerator {
    dealloc<R = void>(): R;
    nextObject<R = unknown>(): R;
    initWithCollectionViewIndexPathSet<R = unknown, P0 = unknown>(_initWithCollectionViewIndexPathSet: P0): R;
  }
  namespace classes {
    export interface _NSCollectionViewMutableIndexPathSetEnumerator<T = any> extends cocoa.classes.NSEnumerator {  }
  }
}
