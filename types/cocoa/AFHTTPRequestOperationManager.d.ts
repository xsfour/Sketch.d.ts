/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFHTTPRequestOperationManager<T = any> extends cocoa.NSObject, cocoa.NSSecureCodingProtocol, cocoa.NSCopyingProtocol {
    cxx_destruct<R = void>(): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    description<R = unknown>(): R;
    DELETE_parameters_success_failure<R = unknown, P0 = unknown, P1 = unknown, P2 = cocoa.CDUnknownBlockType, P3 = cocoa.CDUnknownBlockType>(_DELETE: P0, _parameters: P1, _success: P2, _failure: P3): R;
    PATCH_parameters_success_failure<R = unknown, P0 = unknown, P1 = unknown, P2 = cocoa.CDUnknownBlockType, P3 = cocoa.CDUnknownBlockType>(_PATCH: P0, _parameters: P1, _success: P2, _failure: P3): R;
    PUT_parameters_success_failure<R = unknown, P0 = unknown, P1 = unknown, P2 = cocoa.CDUnknownBlockType, P3 = cocoa.CDUnknownBlockType>(_PUT: P0, _parameters: P1, _success: P2, _failure: P3): R;
    POST_parameters_constructingBodyWithBlock_success_failure<R = unknown, P0 = unknown, P1 = unknown, P2 = cocoa.CDUnknownBlockType, P3 = cocoa.CDUnknownBlockType, P4 = cocoa.CDUnknownBlockType>(_POST: P0, _parameters: P1, _constructingBodyWithBlock: P2, _success: P3, _failure: P4): R;
    POST_parameters_success_failure<R = unknown, P0 = unknown, P1 = unknown, P2 = cocoa.CDUnknownBlockType, P3 = cocoa.CDUnknownBlockType>(_POST: P0, _parameters: P1, _success: P2, _failure: P3): R;
    HEAD_parameters_success_failure<R = unknown, P0 = unknown, P1 = unknown, P2 = cocoa.CDUnknownBlockType, P3 = cocoa.CDUnknownBlockType>(_HEAD: P0, _parameters: P1, _success: P2, _failure: P3): R;
    GET_parameters_success_failure<R = unknown, P0 = unknown, P1 = unknown, P2 = cocoa.CDUnknownBlockType, P3 = cocoa.CDUnknownBlockType>(_GET: P0, _parameters: P1, _success: P2, _failure: P3): R;
    HTTPRequestOperationWithRequest_success_failure<R = unknown, P0 = unknown, P1 = cocoa.CDUnknownBlockType, P2 = cocoa.CDUnknownBlockType>(_HTTPRequestOperationWithRequest: P0, _success: P1, _failure: P2): R;
    HTTPRequestOperationWithHTTPMethod_URLString_parameters_success_failure<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = cocoa.CDUnknownBlockType, P4 = cocoa.CDUnknownBlockType>(_HTTPRequestOperationWithHTTPMethod: P0, _URLString: P1, _parameters: P2, _success: P3, _failure: P4): R;
    initWithBaseURL<R = unknown, P0 = unknown>(_initWithBaseURL: P0): R;
    completionGroup<R = cocoa.OS_dispatch_group>(): R;
    setCompletionGroup<R = void, P0 = cocoa.OS_dispatch_group>(_v: P0): R;
    completionQueue<R = cocoa.OS_dispatch_queue>(): R;
    setCompletionQueue<R = void, P0 = cocoa.OS_dispatch_queue>(_v: P0): R;
    reachabilityManager<R = cocoa.AFNetworkReachabilityManager>(): R;
    setReachabilityManager<R = void, P0 = cocoa.AFNetworkReachabilityManager>(_v: P0): R;
    securityPolicy<R = cocoa.AFSecurityPolicy>(): R;
    setSecurityPolicy<R = void, P0 = cocoa.AFSecurityPolicy>(_v: P0): R;
    credential<R = cocoa.NSURLCredential>(): R;
    setCredential<R = void, P0 = cocoa.NSURLCredential>(_v: P0): R;
    shouldUseCredentialStorage<R = boolean>(): R;
    setShouldUseCredentialStorage<R = void, P0 = boolean>(_v: P0): R;
    operationQueue<R = cocoa.NSOperationQueue>(): R;
    setOperationQueue<R = void, P0 = cocoa.NSOperationQueue>(_v: P0): R;
    responseSerializer<R = cocoa.AFURLResponseSerialization>(): R;
    setResponseSerializer<R = void, P0 = cocoa.AFURLResponseSerialization>(_v: P0): R;
    requestSerializer<R = cocoa.AFURLRequestSerialization>(): R;
    setRequestSerializer<R = void, P0 = cocoa.AFURLRequestSerialization>(_v: P0): R;
    baseURL<R = cocoa.NSURL>(): R;
    setBaseURL<R = void, P0 = cocoa.NSURL>(_v: P0): R;
  }
  namespace classes {
    export interface AFHTTPRequestOperationManager<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSSecureCodingProtocol, cocoa.classes.NSCopyingProtocol {
      alloc<R = AFHTTPRequestOperationManager>(): R;
      new: <R = AFHTTPRequestOperationManager>() => R;
      manager<R = unknown>(): R;
    }
  }
}

declare const AFHTTPRequestOperationManager: cocoa.classes.AFHTTPRequestOperationManager;
