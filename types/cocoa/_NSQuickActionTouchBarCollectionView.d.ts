/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSQuickActionTouchBarCollectionView<T = any> extends cocoa.NSCollectionView {}
  namespace classes {
    export interface _NSQuickActionTouchBarCollectionView<T = any> extends cocoa.classes.NSCollectionView {
      alloc<R = _NSQuickActionTouchBarCollectionView>(): R;
      new: <R = _NSQuickActionTouchBarCollectionView>() => R;
    }
  }
}
