/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetCollection<T = any> extends cocoa._MSAssetCollection {
    moveAssetAtIndex_beforeObjectAtIndex_ofType<R = boolean, P0 = number, P1 = number, P2 = number>(_moveAssetAtIndex: P0, _beforeObjectAtIndex: P1, _ofType: P2): R;
    moveAssetInArray_fromIndex_toIndex<R = unknown, P0 = unknown, P1 = number, P2 = number>(_moveAssetInArray: P0, _fromIndex: P1, _toIndex: P2): R;
    indexesOfAsset<R = unknown, P0 = unknown>(_indexesOfAsset: P0): R;
    arrayForType<R = unknown, P0 = number>(_arrayForType: P0): R;
    removeAssetAtIndex_ofType<R = void, P0 = number, P1 = number>(_removeAssetAtIndex: P0, _ofType: P1): R;
    assetAtIndex_ofType<R = unknown, P0 = number, P1 = number>(_assetAtIndex: P0, _ofType: P1): R;
    addAsset<R = void, P0 = unknown>(_addAsset: P0): R;
    numberOfAssetsOfType<R = number, P0 = number>(_numberOfAssetsOfType: P0): R;
  }
  namespace classes {
    export interface MSAssetCollection<T = any> extends cocoa.classes._MSAssetCollection {
      alloc<R = MSAssetCollection>(): R;
      new: <R = MSAssetCollection>() => R;
    }
  }
}

declare const MSAssetCollection: cocoa.classes.MSAssetCollection;
