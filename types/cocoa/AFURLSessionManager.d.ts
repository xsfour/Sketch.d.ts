/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFURLSessionManager<T = any> extends cocoa.NSObject, cocoa.NSURLSessionDelegateProtocol, cocoa.NSURLSessionTaskDelegateProtocol, cocoa.NSURLSessionDataDelegateProtocol, cocoa.NSURLSessionDownloadDelegateProtocol, cocoa.NSSecureCodingProtocol, cocoa.NSCopyingProtocol {
    cxx_destruct<R = void>(): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    setDownloadTaskDidResumeBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_setDownloadTaskDidResumeBlock: P0): R;
    setDownloadTaskDidWriteDataBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_setDownloadTaskDidWriteDataBlock: P0): R;
    setDownloadTaskDidFinishDownloadingBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_setDownloadTaskDidFinishDownloadingBlock: P0): R;
    setDataTaskWillCacheResponseBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_setDataTaskWillCacheResponseBlock: P0): R;
    setDataTaskDidReceiveDataBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_setDataTaskDidReceiveDataBlock: P0): R;
    setDataTaskDidBecomeDownloadTaskBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_setDataTaskDidBecomeDownloadTaskBlock: P0): R;
    setDataTaskDidReceiveResponseBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_setDataTaskDidReceiveResponseBlock: P0): R;
    setTaskDidCompleteBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_setTaskDidCompleteBlock: P0): R;
    setTaskDidSendBodyDataBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_setTaskDidSendBodyDataBlock: P0): R;
    setTaskDidReceiveAuthenticationChallengeBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_setTaskDidReceiveAuthenticationChallengeBlock: P0): R;
    setTaskWillPerformHTTPRedirectionBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_setTaskWillPerformHTTPRedirectionBlock: P0): R;
    setTaskNeedNewBodyStreamBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_setTaskNeedNewBodyStreamBlock: P0): R;
    setDidFinishEventsForBackgroundURLSessionBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_setDidFinishEventsForBackgroundURLSessionBlock: P0): R;
    setSessionDidReceiveAuthenticationChallengeBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_setSessionDidReceiveAuthenticationChallengeBlock: P0): R;
    setSessionDidBecomeInvalidBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_setSessionDidBecomeInvalidBlock: P0): R;
    downloadProgressForTask<R = unknown, P0 = unknown>(_downloadProgressForTask: P0): R;
    uploadProgressForTask<R = unknown, P0 = unknown>(_uploadProgressForTask: P0): R;
    downloadTaskWithResumeData_progress_destination_completionHandler<R = unknown, P0 = unknown, P1 = unknown, P2 = cocoa.CDUnknownBlockType, P3 = cocoa.CDUnknownBlockType>(_downloadTaskWithResumeData: P0, _progress: P1, _destination: P2, _completionHandler: P3): R;
    downloadTaskWithRequest_progress_destination_completionHandler<R = unknown, P0 = unknown, P1 = unknown, P2 = cocoa.CDUnknownBlockType, P3 = cocoa.CDUnknownBlockType>(_downloadTaskWithRequest: P0, _progress: P1, _destination: P2, _completionHandler: P3): R;
    uploadTaskWithStreamedRequest_progress_completionHandler<R = unknown, P0 = unknown, P1 = unknown, P2 = cocoa.CDUnknownBlockType>(_uploadTaskWithStreamedRequest: P0, _progress: P1, _completionHandler: P2): R;
    uploadTaskWithRequest_fromData_progress_completionHandler<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = cocoa.CDUnknownBlockType>(_uploadTaskWithRequest: P0, _fromData: P1, _progress: P2, _completionHandler: P3): R;
    uploadTaskWithRequest_fromFile_progress_completionHandler<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = cocoa.CDUnknownBlockType>(_uploadTaskWithRequest: P0, _fromFile: P1, _progress: P2, _completionHandler: P3): R;
    dataTaskWithRequest_completionHandler<R = unknown, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_dataTaskWithRequest: P0, _completionHandler: P1): R;
    invalidateSessionCancelingTasks<R = void, P0 = boolean>(_invalidateSessionCancelingTasks: P0): R;
    tasksForKeyPath<R = unknown, P0 = unknown>(_tasksForKeyPath: P0): R;
    removeAllDelegates<R = void>(): R;
    removeDelegateForTask<R = void, P0 = unknown>(_removeDelegateForTask: P0): R;
    addDelegateForDownloadTask_progress_destination_completionHandler<R = void, P0 = unknown, P1 = unknown, P2 = cocoa.CDUnknownBlockType, P3 = cocoa.CDUnknownBlockType>(_addDelegateForDownloadTask: P0, _progress: P1, _destination: P2, _completionHandler: P3): R;
    addDelegateForUploadTask_progress_completionHandler<R = void, P0 = unknown, P1 = unknown, P2 = cocoa.CDUnknownBlockType>(_addDelegateForUploadTask: P0, _progress: P1, _completionHandler: P2): R;
    addDelegateForDataTask_completionHandler<R = void, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_addDelegateForDataTask: P0, _completionHandler: P1): R;
    setDelegate_forTask<R = void, P0 = unknown, P1 = unknown>(_setDelegate: P0, _forTask: P1): R;
    delegateForTask<R = unknown, P0 = unknown>(_delegateForTask: P0): R;
    taskDidSuspend<R = void, P0 = unknown>(_taskDidSuspend: P0): R;
    taskDidResume<R = void, P0 = unknown>(_taskDidResume: P0): R;
    dealloc<R = void>(): R;
    initWithSessionConfiguration<R = unknown, P0 = unknown>(_initWithSessionConfiguration: P0): R;
    downloadTaskDidResume<R = cocoa.CDUnknownBlockType>(): R;
    setDownloadTaskDidResume<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    downloadTaskDidWriteData<R = cocoa.CDUnknownBlockType>(): R;
    setDownloadTaskDidWriteData<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    downloadTaskDidFinishDownloading<R = cocoa.CDUnknownBlockType>(): R;
    setDownloadTaskDidFinishDownloading<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    dataTaskWillCacheResponse<R = cocoa.CDUnknownBlockType>(): R;
    setDataTaskWillCacheResponse<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    dataTaskDidReceiveData<R = cocoa.CDUnknownBlockType>(): R;
    setDataTaskDidReceiveData<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    dataTaskDidBecomeDownloadTask<R = cocoa.CDUnknownBlockType>(): R;
    setDataTaskDidBecomeDownloadTask<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    dataTaskDidReceiveResponse<R = cocoa.CDUnknownBlockType>(): R;
    setDataTaskDidReceiveResponse<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    taskDidComplete<R = cocoa.CDUnknownBlockType>(): R;
    setTaskDidComplete<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    taskDidSendBodyData<R = cocoa.CDUnknownBlockType>(): R;
    setTaskDidSendBodyData<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    taskNeedNewBodyStream<R = cocoa.CDUnknownBlockType>(): R;
    setTaskNeedNewBodyStream<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    taskDidReceiveAuthenticationChallenge<R = cocoa.CDUnknownBlockType>(): R;
    setTaskDidReceiveAuthenticationChallenge<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    taskWillPerformHTTPRedirection<R = cocoa.CDUnknownBlockType>(): R;
    setTaskWillPerformHTTPRedirection<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    didFinishEventsForBackgroundURLSession<R = cocoa.CDUnknownBlockType>(): R;
    setDidFinishEventsForBackgroundURLSession<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    sessionDidReceiveAuthenticationChallenge<R = cocoa.CDUnknownBlockType>(): R;
    setSessionDidReceiveAuthenticationChallenge<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    sessionDidBecomeInvalid<R = cocoa.CDUnknownBlockType>(): R;
    setSessionDidBecomeInvalid<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    lock<R = cocoa.NSLock>(): R;
    setLock<R = void, P0 = cocoa.NSLock>(_v: P0): R;
    mutableTaskDelegatesKeyedByTaskIdentifier<R = cocoa.NSMutableDictionary>(): R;
    setMutableTaskDelegatesKeyedByTaskIdentifier<R = void, P0 = cocoa.NSMutableDictionary>(_v: P0): R;
    sessionConfiguration<R = cocoa.NSURLSessionConfiguration>(): R;
    setSessionConfiguration<R = void, P0 = cocoa.NSURLSessionConfiguration>(_v: P0): R;
    attemptsToRecreateUploadTasksForBackgroundSessions<R = boolean>(): R;
    setAttemptsToRecreateUploadTasksForBackgroundSessions<R = void, P0 = boolean>(_v: P0): R;
    completionGroup<R = cocoa.OS_dispatch_group>(): R;
    setCompletionGroup<R = void, P0 = cocoa.OS_dispatch_group>(_v: P0): R;
    completionQueue<R = cocoa.OS_dispatch_queue>(): R;
    setCompletionQueue<R = void, P0 = cocoa.OS_dispatch_queue>(_v: P0): R;
    reachabilityManager<R = cocoa.AFNetworkReachabilityManager>(): R;
    setReachabilityManager<R = void, P0 = cocoa.AFNetworkReachabilityManager>(_v: P0): R;
    securityPolicy<R = cocoa.AFSecurityPolicy>(): R;
    setSecurityPolicy<R = void, P0 = cocoa.AFSecurityPolicy>(_v: P0): R;
    responseSerializer<R = cocoa.AFURLResponseSerialization>(): R;
    setResponseSerializer<R = void, P0 = cocoa.AFURLResponseSerialization>(_v: P0): R;
    operationQueue<R = cocoa.NSOperationQueue>(): R;
    setOperationQueue<R = void, P0 = cocoa.NSOperationQueue>(_v: P0): R;
    session<R = cocoa.NSURLSession>(): R;
    setSession<R = void, P0 = cocoa.NSURLSession>(_v: P0): R;
    description<R = cocoa.NSString>(): R;
    downloadTasks<R = cocoa.NSArray>(): R;
    uploadTasks<R = cocoa.NSArray>(): R;
    dataTasks<R = cocoa.NSArray>(): R;
    tasks<R = cocoa.NSArray>(): R;
    taskDescriptionForSessionTasks<R = cocoa.NSString>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface AFURLSessionManager<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSURLSessionDelegateProtocol, cocoa.classes.NSURLSessionTaskDelegateProtocol, cocoa.classes.NSURLSessionDataDelegateProtocol, cocoa.classes.NSURLSessionDownloadDelegateProtocol, cocoa.classes.NSSecureCodingProtocol, cocoa.classes.NSCopyingProtocol {
      alloc<R = AFURLSessionManager>(): R;
      new: <R = AFURLSessionManager>() => R;
    }
  }
}

declare const AFURLSessionManager: cocoa.classes.AFURLSessionManager;
