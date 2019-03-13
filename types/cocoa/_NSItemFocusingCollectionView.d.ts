/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSItemFocusingCollectionView<T = any> extends NSCollectionView {
    isActiveFirstResponder<R = boolean>(): R;
    setIsActiveFirstResponder<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface _NSItemFocusingCollectionView<T = any> extends NSCollectionView {
      alloc<R = _NSItemFocusingCollectionView>(): R;
      new: <R = _NSItemFocusingCollectionView>() => R;
    }
  }
}
