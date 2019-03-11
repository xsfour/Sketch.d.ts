/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCollectionViewDataSourceProtocol<T = any> extends cocoa.NSObjectProtocol {
    collectionView_itemForRepresentedObjectAtIndexPath<R = cocoa.NSCollectionViewItem, P0 = cocoa.NSCollectionView, P1 = cocoa.NSIndexPath>(_collectionView: P0, _itemForRepresentedObjectAtIndexPath: P1): R;
    collectionView_numberOfItemsInSection<R = number, P0 = cocoa.NSCollectionView, P1 = number>(_collectionView: P0, _numberOfItemsInSection: P1): R;
    collectionView_viewForSupplementaryElementOfKind_atIndexPath<R = cocoa.NSView, P0 = cocoa.NSCollectionView, P1 = cocoa.NSString, P2 = cocoa.NSIndexPath>(_collectionView: P0, _viewForSupplementaryElementOfKind: P1, _atIndexPath: P2): R;
    numberOfSectionsInCollectionView<R = number, P0 = cocoa.NSCollectionView>(_numberOfSectionsInCollectionView: P0): R;
  }
  namespace classes {
    export interface NSCollectionViewDataSourceProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSCollectionViewDataSourceProtocol: cocoa.classes.NSCollectionViewDataSourceProtocol;
