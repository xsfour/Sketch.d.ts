/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWelcomeCollectionViewDelegateProtocol<T = any> extends cocoa.NSCollectionViewDelegateProtocol {
    collectionView_newItemForRepresentedObject<R = cocoa.NSCollectionViewItem, P0 = cocoa.NSCollectionView, P1 = unknown>(_collectionView: P0, _newItemForRepresentedObject: P1): R;
  }
  namespace classes {
    export interface MSWelcomeCollectionViewDelegateProtocol<T = any> extends cocoa.classes.NSCollectionViewDelegateProtocol {  }
  }
}

declare const MSWelcomeCollectionViewDelegateProtocol: cocoa.classes.MSWelcomeCollectionViewDelegateProtocol;
