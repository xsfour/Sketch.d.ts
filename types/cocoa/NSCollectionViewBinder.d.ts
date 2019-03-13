/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCollectionViewBinder<T = any> extends NSBinder {
    collectionView_didChangeToSelectionIndexes<R = void, P0 = unknown, P1 = unknown>(_collectionView: P0, _didChangeToSelectionIndexes: P1): R;
    _updateContent<R = void>(): R;
    _updateSelectionIndexes<R = void, P0 = unknown>(__updateSelectionIndexes: P0): R;
  }
  namespace classes {
    export interface NSCollectionViewBinder<T = any> extends NSBinder {
      alloc<R = NSCollectionViewBinder>(): R;
      new: <R = NSCollectionViewBinder>() => R;
    }
  }
}

declare const NSCollectionViewBinder: cocoa.classes.NSCollectionViewBinder;
