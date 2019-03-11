/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCollectionViewLayout<T = any> {
    // + NSCollectionViewLayout(NSPrivateItemSequence):
    
  }
  namespace classes {
    export interface NSCollectionViewLayout<T = any> {
      // + NSCollectionViewLayout(NSPrivateItemSequence):
      itemLayoutIsSequential<R = boolean>(): R;
    }
  }
}

declare const NSCollectionViewLayout: cocoa.classes.NSCollectionViewLayout;
