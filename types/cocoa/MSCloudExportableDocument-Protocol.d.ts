/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudExportableDocumentProtocol<T = any> extends cocoa.NSObjectProtocol {
    cloudName<R = cocoa.NSString>(): R;
    cloudShare<R = cocoa.SCKShare>(): R;
    setCloudShare<R = void, P0 = cocoa.SCKShare>(_v: P0): R;
    cacheManager<R = cocoa.MSCacheManager>(): R;
    UIMetadata<R = cocoa.NSDictionary>(): R;
    documentData<R = cocoa.MSDocumentData>(): R;
  }
  namespace classes {
    export interface MSCloudExportableDocumentProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const MSCloudExportableDocumentProtocol: cocoa.classes.MSCloudExportableDocumentProtocol;
