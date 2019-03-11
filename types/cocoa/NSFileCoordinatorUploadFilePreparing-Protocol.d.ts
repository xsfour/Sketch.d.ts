/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileCoordinatorUploadFilePreparingProtocol<T = any> {
    prepareFileForUploadingAtURL_originalURLExtension_inDirectory_destinationSandboxExtension_completionHandler<R = cocoa.NSProgress, P0 = cocoa.NSURL, P1 = cocoa.NSData, P2 = cocoa.NSURL, P3 = cocoa.NSData, P4 = cocoa.CDUnknownBlockType>(_prepareFileForUploadingAtURL: P0, _originalURLExtension: P1, _inDirectory: P2, _destinationSandboxExtension: P3, _completionHandler: P4): R;
  }
  namespace classes {
    export interface NSFileCoordinatorUploadFilePreparingProtocol<T = any> {  }
  }
}

declare const NSFileCoordinatorUploadFilePreparingProtocol: cocoa.classes.NSFileCoordinatorUploadFilePreparingProtocol;
