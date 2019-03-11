/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudShareUploadController<T = any> extends cocoa.NSObject, cocoa.SCKShareUploadDataSourceProtocol {
    cxx_destruct<R = void>(): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    cancel<R = void>(): R;
    loadManifest<R = unknown>(): R;
    createShare<R = void>(): R;
    startUpload<R = void>(): R;
    dealloc<R = void>(): R;
    initWithDocument<R = unknown, P0 = unknown>(_initWithDocument: P0): R;
    operation<R = cocoa.SCKShareUploadOperation>(): R;
    setOperation<R = void, P0 = cocoa.SCKShareUploadOperation>(_v: P0): R;
    webExporter<R = cocoa.MSWebExporter>(): R;
    setWebExporter<R = void, P0 = cocoa.MSWebExporter>(_v: P0): R;
    name<R = cocoa.NSString>(): R;
    setName<R = void, P0 = cocoa.NSString>(_v: P0): R;
    localURL<R = cocoa.NSURL>(): R;
    setLocalURL<R = void, P0 = cocoa.NSURL>(_v: P0): R;
    previousShare<R = cocoa.SCKShare>(): R;
    setPreviousShare<R = void, P0 = cocoa.SCKShare>(_v: P0): R;
    document<R = cocoa.MSCloudExportableDocument>(): R;
    setDocument<R = void, P0 = cocoa.MSCloudExportableDocument>(_v: P0): R;
    cancelled<R = boolean>(): R;
    organization<R = cocoa.SCKOrganization>(): R;
    setOrganization<R = void, P0 = cocoa.SCKOrganization>(_v: P0): R;
    existingShare<R = cocoa.SCKShare>(): R;
    setExistingShare<R = void, P0 = cocoa.SCKShare>(_v: P0): R;
    previousUpload<R = cocoa.MSCloudShareUploadController>(): R;
    setPreviousUpload<R = void, P0 = cocoa.MSCloudShareUploadController>(_v: P0): R;
    delegate<R = cocoa.MSCloudShareUploadControllerDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.MSCloudShareUploadControllerDelegate>(_v: P0): R;
    progress<R = cocoa.NSProgress>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSCloudShareUploadController<T = any> extends cocoa.classes.NSObject, cocoa.classes.SCKShareUploadDataSourceProtocol {
      alloc<R = MSCloudShareUploadController>(): R;
      new: <R = MSCloudShareUploadController>() => R;
      operationQueue<R = unknown>(): R;
    }
  }
}

declare const MSCloudShareUploadController: cocoa.classes.MSCloudShareUploadController;
