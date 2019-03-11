/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSItemRepresentationLoadResult<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol {
    copyWithData_urlWrapper_cleanupHandler_error<R = unknown, P0 = unknown, P1 = unknown, P2 = cocoa.CDUnknownBlockType, P3 = unknown>(_copyWithData: P0, _urlWrapper: P1, _cleanupHandler: P2, _error: P3): R;
    dealloc<R = void>(): R;
    wasOpenedInPlace<R = boolean>(): R;
    setWasOpenedInPlace<R = void, P0 = boolean>(_v: P0): R;
    archivedObjectClassName<R = cocoa.NSString>(): R;
    setArchivedObjectClassName<R = void, P0 = cocoa.NSString>(_v: P0): R;
    error<R = cocoa.NSError>(): R;
    setError<R = void, P0 = cocoa.NSError>(_v: P0): R;
    cleanupHandler<R = cocoa.CDUnknownBlockType>(): R;
    setCleanupHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    urlWrapper<R = cocoa.NSSecurityScopedURLWrapper>(): R;
    setUrlWrapper<R = void, P0 = cocoa.NSSecurityScopedURLWrapper>(_v: P0): R;
    data<R = cocoa.NSData>(): R;
    setData<R = void, P0 = cocoa.NSData>(_v: P0): R;
  }
  namespace classes {
    export interface NSItemRepresentationLoadResult<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol {
      alloc<R = NSItemRepresentationLoadResult>(): R;
      new: <R = NSItemRepresentationLoadResult>() => R;
      resultWithError<R = unknown, P0 = unknown>(_resultWithError: P0): R;
      resultWithData_urlWrapper_cleanupHandler_error<R = unknown, P0 = unknown, P1 = unknown, P2 = cocoa.CDUnknownBlockType, P3 = unknown>(_resultWithData: P0, _urlWrapper: P1, _cleanupHandler: P2, _error: P3): R;
    }
  }
}

declare const NSItemRepresentationLoadResult: cocoa.classes.NSItemRepresentationLoadResult;
