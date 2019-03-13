/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSWelcomeCollectionViewDelegateProtocol<T = any> extends NSCollectionViewDelegateProtocol {
    collectionView_newItemForRepresentedObject<R = NSCollectionViewItem, P0 = NSCollectionView, P1 = unknown>(_collectionView: P0, _newItemForRepresentedObject: P1): R;
  }
  namespace classes {
    export interface MSWelcomeCollectionViewDelegateProtocol<T = any> extends NSCollectionViewDelegateProtocol {  }
  }
}
