/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFURLConnectionOperation<T = any> extends cocoa.NSOperation, cocoa.NSURLConnectionDelegateProtocol, cocoa.NSURLConnectionDataDelegateProtocol, cocoa.NSSecureCodingProtocol, cocoa.NSCopyingProtocol {
    cxx_destruct<R = void>(): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    cancelConnection<R = void>(): R;
    finish<R = void>(): R;
    operationDidStart<R = void>(): R;
    isConcurrent<R = boolean>(): R;
    isFinished<R = boolean>(): R;
    isExecuting<R = boolean>(): R;
    isReady<R = boolean>(): R;
    setCompletionBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_setCompletionBlock: P0): R;
    setRedirectResponseBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_setRedirectResponseBlock: P0): R;
    setCacheResponseBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_setCacheResponseBlock: P0): R;
    setWillSendRequestForAuthenticationChallengeBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_setWillSendRequestForAuthenticationChallengeBlock: P0): R;
    setDownloadProgressBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_setDownloadProgressBlock: P0): R;
    setUploadProgressBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_setUploadProgressBlock: P0): R;
    resume<R = void>(): R;
    isPaused<R = boolean>(): R;
    operationDidPause<R = void>(): R;
    pause<R = void>(): R;
    initWithRequest<R = unknown, P0 = unknown>(_initWithRequest: P0): R;
    redirectResponse<R = cocoa.CDUnknownBlockType>(): R;
    setRedirectResponse<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    cacheResponse<R = cocoa.CDUnknownBlockType>(): R;
    setCacheResponse<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    authenticationChallenge<R = cocoa.CDUnknownBlockType>(): R;
    setAuthenticationChallenge<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    downloadProgress<R = cocoa.CDUnknownBlockType>(): R;
    setDownloadProgress<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    uploadProgress<R = cocoa.CDUnknownBlockType>(): R;
    setUploadProgress<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    backgroundTaskCleanup<R = cocoa.CDUnknownBlockType>(): R;
    setBackgroundTaskCleanup<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    totalBytesRead<R = number>(): R;
    setTotalBytesRead<R = void, P0 = number>(_v: P0): R;
    responseStringEncoding<R = number>(): R;
    setResponseStringEncoding<R = void, P0 = number>(_v: P0): R;
    responseString<R = cocoa.NSString>(): R;
    setResponseString<R = void, P0 = cocoa.NSString>(_v: P0): R;
    connection<R = cocoa.NSURLConnection>(): R;
    setConnection<R = void, P0 = cocoa.NSURLConnection>(_v: P0): R;
    lock<R = cocoa.NSRecursiveLock>(): R;
    setLock<R = void, P0 = cocoa.NSRecursiveLock>(_v: P0): R;
    state<R = number>(): R;
    setState<R = void, P0 = number>(_v: P0): R;
    userInfo<R = cocoa.NSDictionary>(): R;
    setUserInfo<R = void, P0 = cocoa.NSDictionary>(_v: P0): R;
    completionGroup<R = cocoa.OS_dispatch_group>(): R;
    setCompletionGroup<R = void, P0 = cocoa.OS_dispatch_group>(_v: P0): R;
    completionQueue<R = cocoa.OS_dispatch_queue>(): R;
    setCompletionQueue<R = void, P0 = cocoa.OS_dispatch_queue>(_v: P0): R;
    securityPolicy<R = cocoa.AFSecurityPolicy>(): R;
    setSecurityPolicy<R = void, P0 = cocoa.AFSecurityPolicy>(_v: P0): R;
    credential<R = cocoa.NSURLCredential>(): R;
    setCredential<R = void, P0 = cocoa.NSURLCredential>(_v: P0): R;
    shouldUseCredentialStorage<R = boolean>(): R;
    setShouldUseCredentialStorage<R = void, P0 = boolean>(_v: P0): R;
    responseData<R = cocoa.NSData>(): R;
    setResponseData<R = void, P0 = cocoa.NSData>(_v: P0): R;
    error<R = cocoa.NSError>(): R;
    setError<R = void, P0 = cocoa.NSError>(_v: P0): R;
    response<R = cocoa.NSURLResponse>(): R;
    setResponse<R = void, P0 = cocoa.NSURLResponse>(_v: P0): R;
    request<R = cocoa.NSURLRequest>(): R;
    setRequest<R = void, P0 = cocoa.NSURLRequest>(_v: P0): R;
    runLoopModes<R = cocoa.NSSet>(): R;
    setRunLoopModes<R = void, P0 = cocoa.NSSet>(_v: P0): R;
    description<R = cocoa.NSString>(): R;
    outputStream<R = cocoa.NSOutputStream>(): R;
    setOutputStream<R = void, P0 = cocoa.NSOutputStream>(_v: P0): R;
    inputStream<R = cocoa.NSInputStream>(): R;
    setInputStream<R = void, P0 = cocoa.NSInputStream>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface AFURLConnectionOperation<T = any> extends cocoa.classes.NSOperation, cocoa.classes.NSURLConnectionDelegateProtocol, cocoa.classes.NSURLConnectionDataDelegateProtocol, cocoa.classes.NSSecureCodingProtocol, cocoa.classes.NSCopyingProtocol {
      alloc<R = AFURLConnectionOperation>(): R;
      new: <R = AFURLConnectionOperation>() => R;
      batchOfRequestOperations_progressBlock_completionBlock<R = unknown, P0 = unknown, P1 = cocoa.CDUnknownBlockType, P2 = cocoa.CDUnknownBlockType>(_batchOfRequestOperations: P0, _progressBlock: P1, _completionBlock: P2): R;
      networkRequestThread<R = unknown>(): R;
      networkRequestThreadEntryPoint<R = void, P0 = unknown>(_networkRequestThreadEntryPoint: P0): R;
    }
  }
}

declare const AFURLConnectionOperation: cocoa.classes.AFURLConnectionOperation;
