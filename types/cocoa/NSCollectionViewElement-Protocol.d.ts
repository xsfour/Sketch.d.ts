/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCollectionViewElementProtocol<T = any> extends cocoa.NSObjectProtocol, cocoa.NSUserInterfaceItemIdentificationProtocol {
    preferredLayoutAttributesFittingAttributes<R = cocoa.NSCollectionViewLayoutAttributes, P0 = cocoa.NSCollectionViewLayoutAttributes>(_preferredLayoutAttributesFittingAttributes: P0): R;
    didTransitionFromLayout_toLayout<R = void, P0 = cocoa.NSCollectionViewLayout, P1 = cocoa.NSCollectionViewLayout>(_didTransitionFromLayout: P0, _toLayout: P1): R;
    willTransitionFromLayout_toLayout<R = void, P0 = cocoa.NSCollectionViewLayout, P1 = cocoa.NSCollectionViewLayout>(_willTransitionFromLayout: P0, _toLayout: P1): R;
    applyLayoutAttributes<R = void, P0 = cocoa.NSCollectionViewLayoutAttributes>(_applyLayoutAttributes: P0): R;
    prepareForReuse<R = void>(): R;
  }
  namespace classes {
    export interface NSCollectionViewElementProtocol<T = any> extends cocoa.classes.NSObjectProtocol, cocoa.classes.NSUserInterfaceItemIdentificationProtocol {  }
  }
}

declare const NSCollectionViewElementProtocol: cocoa.classes.NSCollectionViewElementProtocol;
