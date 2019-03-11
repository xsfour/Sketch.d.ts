/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetLibrary<T = any> extends cocoa.NSObject, cocoa.QLPreviewItemProtocol, cocoa.BCSortableProtocol, cocoa.NSCodingProtocol, cocoa.MSLibraryObjectProtocol {
    cxx_destruct<R = void>(): R;
    resolveLocationOnDisk<R = void>(): R;
    unload<R = void>(): R;
    handleAssetLibraryUpdateWithCompletionHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_handleAssetLibraryUpdateWithCompletionHandler: P0): R;
    loadAsyncWithDispatchGroup_completionHandler<R = void, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_loadAsyncWithDispatchGroup: P0, _completionHandler: P1): R;
    loadSynchronously<R = boolean>(): R;
    handleDocumentLoaded<R = void, P0 = unknown>(_handleDocumentLoaded: P0): R;
    loadDocument<R = unknown, P0 = number>(_loadDocument: P0): R;
    initWithName<R = unknown, P0 = unknown>(_initWithName: P0): R;
    initWithDocumentAtURL<R = unknown, P0 = unknown>(_initWithDocumentAtURL: P0): R;
    libraryID<R = cocoa.NSString>(): R;
    setLibraryID<R = void, P0 = cocoa.NSString>(_v: P0): R;
    propertyListDictionaryRepresentation<R = cocoa.NSDictionary>(): R;
    libraryType<R = number>(): R;
    delegate<R = cocoa.MSAssetLibraryDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.MSAssetLibraryDelegate>(_v: P0): R;
    name<R = cocoa.NSString>(): R;
    setName<R = void, P0 = cocoa.NSString>(_v: P0): R;
    document<R = cocoa.MSDocumentData>(): R;
    setDocument<R = void, P0 = cocoa.MSDocumentData>(_v: P0): R;
    status<R = number>(): R;
    setStatus<R = void, P0 = number>(_v: P0): R;
    enabled<R = boolean>(): R;
    setEnabled<R = void, P0 = boolean>(_v: P0): R;
    previewURL<R = cocoa.NSURL>(): R;
    dateLastModified<R = cocoa.NSDate>(): R;
    locationOnDisk<R = cocoa.NSURL>(): R;
    setLocationOnDisk<R = void, P0 = cocoa.NSURL>(_v: P0): R;
    canLibraryBeRemoved<R = boolean>(): R;
    valid<R = boolean>(): R;
    previewItemTitle<R = cocoa.NSString>(): R;
    previewItemURL<R = cocoa.NSURL>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    previewItemDisplayState<R = unknown>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSAssetLibrary<T = any> extends cocoa.classes.NSObject, cocoa.classes.QLPreviewItemProtocol, cocoa.classes.BCSortableProtocol, cocoa.classes.NSCodingProtocol, cocoa.classes.MSLibraryObjectProtocol {
      alloc<R = MSAssetLibrary>(): R;
      new: <R = MSAssetLibrary>() => R;
      URLForTemplateLibraryNamed<R = unknown, P0 = unknown>(_URLForTemplateLibraryNamed: P0): R;
      keyPathsForValuesAffectingValid<R = unknown>(): R;
      assetLibraryStatusForDocumentErrorCode<R = number, P0 = number>(_assetLibraryStatusForDocumentErrorCode: P0): R;
    }
  }
}

declare const MSAssetLibrary: cocoa.classes.MSAssetLibrary;
