/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSForeignObjectProviderProtocol<T = any> {
    masterIsOutOfSyncWithInstance<R = boolean, P0 = MSModelObject>(_masterIsOutOfSyncWithInstance: P0): R;
    masterObjectForInstance<R = MSModelObject, P0 = MSModelObject>(_masterObjectForInstance: P0): R;
    currentDocumentIsLibrary<R = boolean, P0 = MSAssetLibrary>(_currentDocumentIsLibrary: P0): R;
    localObjectsForDocument<R = NSArray, P0 = MSDocumentData>(_localObjectsForDocument: P0): R;
    objectType<R = number>(): R;
    libraryController<R = MSAssetLibraryController>(): R;
    currentDocument<R = MSDocumentData>(): R;
    foreignObjects<R = NSArray>(): R;
  }
  namespace classes {
    export interface MSForeignObjectProviderProtocol<T = any> {  }
  }
}
