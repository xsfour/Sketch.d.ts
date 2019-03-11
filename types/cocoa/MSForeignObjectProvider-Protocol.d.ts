/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSForeignObjectProviderProtocol<T = any> {
    masterIsOutOfSyncWithInstance<R = boolean, P0 = cocoa.MSModelObject>(_masterIsOutOfSyncWithInstance: P0): R;
    masterObjectForInstance<R = cocoa.MSModelObject, P0 = cocoa.MSModelObject>(_masterObjectForInstance: P0): R;
    currentDocumentIsLibrary<R = boolean, P0 = cocoa.MSAssetLibrary>(_currentDocumentIsLibrary: P0): R;
    localObjectsForDocument<R = cocoa.NSArray, P0 = cocoa.MSDocumentData>(_localObjectsForDocument: P0): R;
    objectType<R = number>(): R;
    libraryController<R = cocoa.MSAssetLibraryController>(): R;
    currentDocument<R = cocoa.MSDocumentData>(): R;
    foreignObjects<R = cocoa.NSArray>(): R;
  }
  namespace classes {
    export interface MSForeignObjectProviderProtocol<T = any> {  }
  }
}

declare const MSForeignObjectProviderProtocol: cocoa.classes.MSForeignObjectProviderProtocol;
