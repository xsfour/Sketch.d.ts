/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SCKShareUploadDataSourceProtocol<T = any> extends NSObjectProtocol {
    shareUploadOperation_exportDocumentWithHandler<R = void, P0 = SCKShareUploadOperation, P1 = CDUnknownBlockType>(_shareUploadOperation: P0, _exportDocumentWithHandler: P1): R;
    shareUploadOperation_willStartUploadingShare<R = void, P0 = SCKShareUploadOperation, P1 = SCKShare>(_shareUploadOperation: P0, _willStartUploadingShare: P1): R;
    shareUploadOperation_fileURLForItemWithHash<R = NSURL, P0 = SCKShareUploadOperation, P1 = NSString>(_shareUploadOperation: P0, _fileURLForItemWithHash: P1): R;
  }
  namespace classes {
    export interface SCKShareUploadDataSourceProtocol<T = any> extends NSObjectProtocol {  }
  }
}
