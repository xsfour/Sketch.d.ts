/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSURLSessionDataDelegateProtocol<T = any> extends cocoa.NSURLSessionTaskDelegateProtocol {
    URLSession_dataTask_willCacheResponse_completionHandler<R = void, P0 = cocoa.NSURLSession, P1 = cocoa.NSURLSessionDataTask, P2 = cocoa.NSCachedURLResponse, P3 = cocoa.CDUnknownBlockType>(_URLSession: P0, _dataTask: P1, _willCacheResponse: P2, _completionHandler: P3): R;
    URLSession_dataTask_didReceiveData<R = void, P0 = cocoa.NSURLSession, P1 = cocoa.NSURLSessionDataTask, P2 = cocoa.NSData>(_URLSession: P0, _dataTask: P1, _didReceiveData: P2): R;
    URLSession_dataTask_didBecomeStreamTask<R = void, P0 = cocoa.NSURLSession, P1 = cocoa.NSURLSessionDataTask, P2 = cocoa.NSURLSessionStreamTask>(_URLSession: P0, _dataTask: P1, _didBecomeStreamTask: P2): R;
    URLSession_dataTask_didBecomeDownloadTask<R = void, P0 = cocoa.NSURLSession, P1 = cocoa.NSURLSessionDataTask, P2 = cocoa.NSURLSessionDownloadTask>(_URLSession: P0, _dataTask: P1, _didBecomeDownloadTask: P2): R;
    URLSession_dataTask_didReceiveResponse_completionHandler<R = void, P0 = cocoa.NSURLSession, P1 = cocoa.NSURLSessionDataTask, P2 = cocoa.NSURLResponse, P3 = cocoa.CDUnknownBlockType>(_URLSession: P0, _dataTask: P1, _didReceiveResponse: P2, _completionHandler: P3): R;
  }
  namespace classes {
    export interface NSURLSessionDataDelegateProtocol<T = any> extends cocoa.classes.NSURLSessionTaskDelegateProtocol {  }
  }
}

declare const NSURLSessionDataDelegateProtocol: cocoa.classes.NSURLSessionDataDelegateProtocol;
