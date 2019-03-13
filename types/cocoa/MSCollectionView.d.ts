/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCollectionView<T = any> extends NSCollectionView {
    drawColumns<R = void>(): R;
    drawRows<R = void>(): R;
  }
  namespace classes {
    export interface MSCollectionView<T = any> extends NSCollectionView {
      alloc<R = MSCollectionView>(): R;
      new: <R = MSCollectionView>() => R;
    }
  }
}

declare const MSCollectionView: cocoa.classes.MSCollectionView;
