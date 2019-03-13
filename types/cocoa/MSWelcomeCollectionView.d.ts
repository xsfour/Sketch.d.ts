/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWelcomeCollectionView<T = any> extends NSCollectionView {}
  namespace classes {
    export interface MSWelcomeCollectionView<T = any> extends NSCollectionView {
      alloc<R = MSWelcomeCollectionView>(): R;
      new: <R = MSWelcomeCollectionView>() => R;
    }
  }
}

declare const MSWelcomeCollectionView: cocoa.classes.MSWelcomeCollectionView;
