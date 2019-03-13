/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSharedLayerReference<T = any> extends MSSharedStyleReference {
    shareableObjectType<R = number>(): R;
    foreignObjectCollectionInDocument<R = unknown, P0 = unknown>(_foreignObjectCollectionInDocument: P0): R;
    addToDocument_withAssetLibraryController<R = unknown, P0 = unknown, P1 = unknown>(_addToDocument: P0, _withAssetLibraryController: P1): R;
  }
  namespace classes {
    export interface MSSharedLayerReference<T = any> extends MSSharedStyleReference {
      alloc<R = MSSharedLayerReference>(): R;
      new: <R = MSSharedLayerReference>() => R;
    }
  }
}

declare const MSSharedLayerReference: cocoa.classes.MSSharedLayerReference;
