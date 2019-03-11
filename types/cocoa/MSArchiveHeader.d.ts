/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArchiveHeader<T = any> extends cocoa.NSObject, cocoa.MSCodingProtocol {
    cxx_destruct<R = void>(): R;
    encodeAsJSON<R = void, P0 = unknown>(_encodeAsJSON: P0): R;
    root<R = unknown>(): R;
    setRoot<R = void, P0 = unknown>(_v: P0): R;
    metadata<R = cocoa.NSDictionary>(): R;
    setMetadata<R = void, P0 = cocoa.NSDictionary>(_v: P0): R;
    compatibilityVersion<R = number>(): R;
    setCompatibilityVersion<R = void, P0 = number>(_v: P0): R;
    version<R = number>(): R;
    setVersion<R = void, P0 = number>(_v: P0): R;
    archiveReferenceIdentifier_bc<R = cocoa.NSString>(): R;
  }
  namespace classes {
    export interface MSArchiveHeader<T = any> extends cocoa.classes.NSObject, cocoa.classes.MSCodingProtocol {
      alloc<R = MSArchiveHeader>(): R;
      new: <R = MSArchiveHeader>() => R;
      metadataForNewHeader<R = unknown>(): R;
    }
  }
}

declare const MSArchiveHeader: cocoa.classes.MSArchiveHeader;
