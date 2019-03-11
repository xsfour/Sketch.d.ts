/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFHTTPSessionManager<T = any> extends cocoa.AFURLSessionManager, cocoa.NSSecureCodingProtocol, cocoa.NSCopyingProtocol {
    description<R = unknown>(): R;
    dataTaskWithHTTPMethod_URLString_parameters_success_failure<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = cocoa.CDUnknownBlockType, P4 = cocoa.CDUnknownBlockType>(_dataTaskWithHTTPMethod: P0, _URLString: P1, _parameters: P2, _success: P3, _failure: P4): R;
    DELETE_parameters_success_failure<R = unknown, P0 = unknown, P1 = unknown, P2 = cocoa.CDUnknownBlockType, P3 = cocoa.CDUnknownBlockType>(_DELETE: P0, _parameters: P1, _success: P2, _failure: P3): R;
    PATCH_parameters_success_failure<R = unknown, P0 = unknown, P1 = unknown, P2 = cocoa.CDUnknownBlockType, P3 = cocoa.CDUnknownBlockType>(_PATCH: P0, _parameters: P1, _success: P2, _failure: P3): R;
    PUT_parameters_success_failure<R = unknown, P0 = unknown, P1 = unknown, P2 = cocoa.CDUnknownBlockType, P3 = cocoa.CDUnknownBlockType>(_PUT: P0, _parameters: P1, _success: P2, _failure: P3): R;
    POST_parameters_constructingBodyWithBlock_success_failure<R = unknown, P0 = unknown, P1 = unknown, P2 = cocoa.CDUnknownBlockType, P3 = cocoa.CDUnknownBlockType, P4 = cocoa.CDUnknownBlockType>(_POST: P0, _parameters: P1, _constructingBodyWithBlock: P2, _success: P3, _failure: P4): R;
    POST_parameters_success_failure<R = unknown, P0 = unknown, P1 = unknown, P2 = cocoa.CDUnknownBlockType, P3 = cocoa.CDUnknownBlockType>(_POST: P0, _parameters: P1, _success: P2, _failure: P3): R;
    HEAD_parameters_success_failure<R = unknown, P0 = unknown, P1 = unknown, P2 = cocoa.CDUnknownBlockType, P3 = cocoa.CDUnknownBlockType>(_HEAD: P0, _parameters: P1, _success: P2, _failure: P3): R;
    GET_parameters_success_failure<R = unknown, P0 = unknown, P1 = unknown, P2 = cocoa.CDUnknownBlockType, P3 = cocoa.CDUnknownBlockType>(_GET: P0, _parameters: P1, _success: P2, _failure: P3): R;
    initWithBaseURL_sessionConfiguration<R = unknown, P0 = unknown, P1 = unknown>(_initWithBaseURL: P0, _sessionConfiguration: P1): R;
    initWithBaseURL<R = unknown, P0 = unknown>(_initWithBaseURL: P0): R;
    requestSerializer<R = cocoa.AFURLRequestSerialization>(): R;
    setRequestSerializer<R = void, P0 = cocoa.AFURLRequestSerialization>(_v: P0): R;
    baseURL<R = cocoa.NSURL>(): R;
    setBaseURL<R = void, P0 = cocoa.NSURL>(_v: P0): R;
    responseSerializer<R = cocoa.AFURLResponseSerialization>(): R;
    setResponseSerializer<R = void, P0 = cocoa.AFURLResponseSerialization>(_v: P0): R;
  }
  namespace classes {
    export interface AFHTTPSessionManager<T = any> extends cocoa.classes.AFURLSessionManager, cocoa.classes.NSSecureCodingProtocol, cocoa.classes.NSCopyingProtocol {
      alloc<R = AFHTTPSessionManager>(): R;
      new: <R = AFHTTPSessionManager>() => R;
      manager<R = unknown>(): R;
    }
  }
}

declare const AFHTTPSessionManager: cocoa.classes.AFHTTPSessionManager;
