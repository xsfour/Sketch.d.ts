/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SCKShareUploadDataSourceProtocol<T = any> extends cocoa.NSObjectProtocol {
    shareUploadOperation_exportDocumentWithHandler<R = void, P0 = cocoa.SCKShareUploadOperation, P1 = cocoa.CDUnknownBlockType>(_shareUploadOperation: P0, _exportDocumentWithHandler: P1): R;
    shareUploadOperation_willStartUploadingShare<R = void, P0 = cocoa.SCKShareUploadOperation, P1 = cocoa.SCKShare>(_shareUploadOperation: P0, _willStartUploadingShare: P1): R;
    shareUploadOperation_fileURLForItemWithHash<R = cocoa.NSURL, P0 = cocoa.SCKShareUploadOperation, P1 = cocoa.NSString>(_shareUploadOperation: P0, _fileURLForItemWithHash: P1): R;
  }
  namespace classes {
    export interface SCKShareUploadDataSourceProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const SCKShareUploadDataSourceProtocol: cocoa.classes.SCKShareUploadDataSourceProtocol;
