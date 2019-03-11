/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWelcomeCollectionView<T = any> extends cocoa.NSCollectionView {}
  namespace classes {
    export interface MSWelcomeCollectionView<T = any> extends cocoa.classes.NSCollectionView {
      alloc<R = MSWelcomeCollectionView>(): R;
      new: <R = MSWelcomeCollectionView>() => R;
    }
  }
}

declare const MSWelcomeCollectionView: cocoa.classes.MSWelcomeCollectionView;
