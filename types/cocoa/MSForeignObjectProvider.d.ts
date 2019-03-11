/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSForeignObjectProvider<T = any> extends cocoa.NSObject, cocoa.MSForeignObjectProviderProtocol {
    cxx_destruct<R = void>(): R;
    shareableObjectForInstance_inContainerOfType<R = cocoa.MSModelObject, P0 = unknown, P1 = number>(_shareableObjectForInstance: P0, _inContainerOfType: P1): R;
    tempDocument<R = unknown>(): R;
    initWithDocument<R = unknown, P0 = unknown>(_initWithDocument: P0): R;
    document<R = cocoa.MSDocument>(): R;
    objectType<R = number>(): R;
    currentDocument<R = cocoa.MSDocumentData>(): R;
    libraryController<R = cocoa.MSAssetLibraryController>(): R;
    foreignObjects<R = cocoa.NSArray>(): R;
  }
  namespace classes {
    export interface MSForeignObjectProvider<T = any> extends cocoa.classes.NSObject, cocoa.classes.MSForeignObjectProviderProtocol {
      alloc<R = MSForeignObjectProvider>(): R;
      new: <R = MSForeignObjectProvider>() => R;
      providerForLayers_inDocument<R = unknown, P0 = unknown, P1 = unknown>(_providerForLayers: P0, _inDocument: P1): R;
    }
  }
}

declare const MSForeignObjectProvider: cocoa.classes.MSForeignObjectProvider;
