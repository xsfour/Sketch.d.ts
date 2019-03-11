/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSharedTextReference<T = any> extends cocoa.MSSharedStyleReference {
    shareableObjectType<R = number>(): R;
    foreignObjectCollectionInDocument<R = unknown, P0 = unknown>(_foreignObjectCollectionInDocument: P0): R;
    addToDocument_withAssetLibraryController<R = unknown, P0 = unknown, P1 = unknown>(_addToDocument: P0, _withAssetLibraryController: P1): R;
  }
  namespace classes {
    export interface MSSharedTextReference<T = any> extends cocoa.classes.MSSharedStyleReference {
      alloc<R = MSSharedTextReference>(): R;
      new: <R = MSSharedTextReference>() => R;
    }
  }
}

declare const MSSharedTextReference: cocoa.classes.MSSharedTextReference;
