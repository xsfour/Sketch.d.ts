/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSymbolMasterReference<T = any> extends MSShareableObjectReference {
    localLocationPath<R = unknown>(): R;
    foreignObjectCollectionInDocument<R = unknown, P0 = unknown>(_foreignObjectCollectionInDocument: P0): R;
    shareableObjectType<R = number>(): R;
    sharedObjectID<R = unknown>(): R;
    hash<R = number>(): R;
    addToDocument_withAssetLibraryController<R = unknown, P0 = unknown, P1 = unknown>(_addToDocument: P0, _withAssetLibraryController: P1): R;
    descriptor<R = MSSymbolMasterReferenceDescriptor>(): R;
    symbolMaster<R = MSSymbolMaster>(): R;
  }
  namespace classes {
    export interface MSSymbolMasterReference<T = any> extends MSShareableObjectReference {
      alloc<R = MSSymbolMasterReference>(): R;
      new: <R = MSSymbolMasterReference>() => R;
    }
  }
}

declare const MSSymbolMasterReference: cocoa.classes.MSSymbolMasterReference;
