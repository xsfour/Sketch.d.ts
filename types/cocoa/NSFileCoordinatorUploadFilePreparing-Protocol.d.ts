/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileCoordinatorUploadFilePreparingProtocol<T = any> {
    prepareFileForUploadingAtURL_originalURLExtension_inDirectory_destinationSandboxExtension_completionHandler<R = NSProgress, P0 = NSURL, P1 = NSData, P2 = NSURL, P3 = NSData, P4 = CDUnknownBlockType>(_prepareFileForUploadingAtURL: P0, _originalURLExtension: P1, _inDirectory: P2, _destinationSandboxExtension: P3, _completionHandler: P4): R;
  }
  namespace classes {
    export interface NSFileCoordinatorUploadFilePreparingProtocol<T = any> {  }
  }
}
