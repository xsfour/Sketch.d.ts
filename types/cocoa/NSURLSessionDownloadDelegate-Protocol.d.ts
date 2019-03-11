/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSURLSessionDownloadDelegateProtocol<T = any> extends cocoa.NSURLSessionTaskDelegateProtocol {
    URLSession_downloadTask_didFinishDownloadingToURL<R = void, P0 = cocoa.NSURLSession, P1 = cocoa.NSURLSessionDownloadTask, P2 = cocoa.NSURL>(_URLSession: P0, _downloadTask: P1, _didFinishDownloadingToURL: P2): R;
    URLSession_downloadTask_didResumeAtOffset_expectedTotalBytes<R = void, P0 = cocoa.NSURLSession, P1 = cocoa.NSURLSessionDownloadTask, P2 = number, P3 = number>(_URLSession: P0, _downloadTask: P1, _didResumeAtOffset: P2, _expectedTotalBytes: P3): R;
    URLSession_downloadTask_didWriteData_totalBytesWritten_totalBytesExpectedToWrite<R = void, P0 = cocoa.NSURLSession, P1 = cocoa.NSURLSessionDownloadTask, P2 = number, P3 = number, P4 = number>(_URLSession: P0, _downloadTask: P1, _didWriteData: P2, _totalBytesWritten: P3, _totalBytesExpectedToWrite: P4): R;
  }
  namespace classes {
    export interface NSURLSessionDownloadDelegateProtocol<T = any> extends cocoa.classes.NSURLSessionTaskDelegateProtocol {  }
  }
}

declare const NSURLSessionDownloadDelegateProtocol: cocoa.classes.NSURLSessionDownloadDelegateProtocol;
