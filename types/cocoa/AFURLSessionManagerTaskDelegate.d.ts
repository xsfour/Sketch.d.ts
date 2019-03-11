/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFURLSessionManagerTaskDelegate<T = any> extends cocoa.NSObject, cocoa.NSURLSessionTaskDelegateProtocol, cocoa.NSURLSessionDataDelegateProtocol, cocoa.NSURLSessionDownloadDelegateProtocol {
    cxx_destruct<R = void>(): R;
    completionHandler<R = cocoa.CDUnknownBlockType>(): R;
    setCompletionHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    downloadTaskDidFinishDownloading<R = cocoa.CDUnknownBlockType>(): R;
    setDownloadTaskDidFinishDownloading<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    downloadFileURL<R = cocoa.NSURL>(): R;
    setDownloadFileURL<R = void, P0 = cocoa.NSURL>(_v: P0): R;
    progress<R = cocoa.NSProgress>(): R;
    setProgress<R = void, P0 = cocoa.NSProgress>(_v: P0): R;
    mutableData<R = cocoa.NSMutableData>(): R;
    setMutableData<R = void, P0 = cocoa.NSMutableData>(_v: P0): R;
    manager<R = cocoa.AFURLSessionManager>(): R;
    setManager<R = void, P0 = cocoa.AFURLSessionManager>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface AFURLSessionManagerTaskDelegate<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSURLSessionTaskDelegateProtocol, cocoa.classes.NSURLSessionDataDelegateProtocol, cocoa.classes.NSURLSessionDownloadDelegateProtocol {
      alloc<R = AFURLSessionManagerTaskDelegate>(): R;
      new: <R = AFURLSessionManagerTaskDelegate>() => R;
    }
  }
}

declare const AFURLSessionManagerTaskDelegate: cocoa.classes.AFURLSessionManagerTaskDelegate;
