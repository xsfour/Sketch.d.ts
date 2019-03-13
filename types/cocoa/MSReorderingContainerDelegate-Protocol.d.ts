/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSReorderingContainerDelegateProtocol<T = any> extends NSObjectProtocol {
    containerBackground_dragDidReorderChildAtIndex_toIndex<R = void, P0 = MSReorderingContainerView, P1 = number, P2 = number>(_containerBackground: P0, _dragDidReorderChildAtIndex: P1, _toIndex: P2): R;
    numberOfReorderableSubviewsForContainerBackground<R = number, P0 = MSReorderingContainerView>(_numberOfReorderableSubviewsForContainerBackground: P0): R;
    startingOffsetForStackingContainerBackground<R = number, P0 = MSReorderingContainerView>(_startingOffsetForStackingContainerBackground: P0): R;
  }
  namespace classes {
    export interface MSReorderingContainerDelegateProtocol<T = any> extends NSObjectProtocol {  }
  }
}
