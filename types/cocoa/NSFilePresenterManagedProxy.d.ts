/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFilePresenterManagedProxy<T = any> extends cocoa.NSObject, cocoa.NSXPCProxyCreatingProtocol {
    forwardInvocation<R = void, P0 = unknown>(_forwardInvocation: P0): R;
    methodSignatureForSelector<R = unknown, P0 = string>(_methodSignatureForSelector: P0): R;
    collectDebuggingInformationWithCompletionHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_collectDebuggingInformationWithCompletionHandler: P0): R;
    accommodateDeletionOfSubitemAtURL_completionHandler<R = void, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_accommodateDeletionOfSubitemAtURL: P0, _completionHandler: P1): R;
    saveChangesWithCompletionHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_saveChangesWithCompletionHandler: P0): R;
    reacquireFromWritingClaimForID_completionHandler<R = void, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_reacquireFromWritingClaimForID: P0, _completionHandler: P1): R;
    relinquishToWritingClaimWithID_options_purposeID_subitemURL_completionHandler<R = void, P0 = unknown, P1 = number, P2 = unknown, P3 = unknown, P4 = cocoa.CDUnknownBlockType>(_relinquishToWritingClaimWithID: P0, _options: P1, _purposeID: P2, _subitemURL: P3, _completionHandler: P4): R;
    relinquishToReadingClaimWithID_options_purposeID_completionHandler<R = void, P0 = unknown, P1 = number, P2 = unknown, P3 = cocoa.CDUnknownBlockType>(_relinquishToReadingClaimWithID: P0, _options: P1, _purposeID: P2, _completionHandler: P3): R;
    _safelySendMessageWithSelector_withErrorCompletionHandler_sender<R = void, P0 = string, P1 = cocoa.CDUnknownBlockType, P2 = cocoa.CDUnknownBlockType>(__safelySendMessageWithSelector: P0, _withErrorCompletionHandler: P1, _sender: P2): R;
    dealloc<R = void>(): R;
    initWithXPCProxy<R = unknown, P0 = unknown>(_initWithXPCProxy: P0): R;
    _presenterRespondsToSelector<R = boolean, P0 = string>(__presenterRespondsToSelector: P0): R;
    errorHandler<R = cocoa.CDUnknownBlockType>(): R;
    setErrorHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    processManager<R = cocoa.NSFileAccessProcessManager>(): R;
    setProcessManager<R = void, P0 = cocoa.NSFileAccessProcessManager>(_v: P0): R;
    filePresenterResponses<R = number>(): R;
    setFilePresenterResponses<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface NSFilePresenterManagedProxy<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSXPCProxyCreatingProtocol {
      alloc<R = NSFilePresenterManagedProxy>(): R;
      new: <R = NSFilePresenterManagedProxy>() => R;
    }
  }
}

declare const NSFilePresenterManagedProxy: cocoa.classes.NSFilePresenterManagedProxy;
