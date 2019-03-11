/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCollectionViewFlowLayout<T = any> {
    // + NSCollectionViewFlowLayout(NSPrivateItemSequence):
    
  }
  namespace classes {
    export interface NSCollectionViewFlowLayout<T = any> {
      // + NSCollectionViewFlowLayout(NSPrivateItemSequence):
      itemLayoutIsSequential<R = boolean>(): R;
    }
  }
}

declare const NSCollectionViewFlowLayout: cocoa.classes.NSCollectionViewFlowLayout;
