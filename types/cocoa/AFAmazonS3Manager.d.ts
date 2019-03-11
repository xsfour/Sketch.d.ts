/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface AFAmazonS3Manager<T = any> extends cocoa.AFHTTPRequestOperationManager, cocoa.NSSecureCodingProtocol, cocoa.NSCopyingProtocol {
    deleteObjectWithPath_success_failure<R = unknown, P0 = unknown, P1 = cocoa.CDUnknownBlockType, P2 = cocoa.CDUnknownBlockType>(_deleteObjectWithPath: P0, _success: P1, _failure: P2): R;
    setObjectWithMethod_file_destinationPath_parameters_progress_success_failure<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = cocoa.CDUnknownBlockType, P5 = cocoa.CDUnknownBlockType, P6 = cocoa.CDUnknownBlockType>(_setObjectWithMethod: P0, _file: P1, _destinationPath: P2, _parameters: P3, _progress: P4, _success: P5, _failure: P6): R;
    putObjectWithFile_destinationPath_parameters_progress_success_failure<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = cocoa.CDUnknownBlockType, P4 = cocoa.CDUnknownBlockType, P5 = cocoa.CDUnknownBlockType>(_putObjectWithFile: P0, _destinationPath: P1, _parameters: P2, _progress: P3, _success: P4, _failure: P5): R;
    postObjectWithFile_destinationPath_parameters_progress_success_failure<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = cocoa.CDUnknownBlockType, P4 = cocoa.CDUnknownBlockType, P5 = cocoa.CDUnknownBlockType>(_postObjectWithFile: P0, _destinationPath: P1, _parameters: P2, _progress: P3, _success: P4, _failure: P5): R;
    getObjectWithPath_outputStream_progress_success_failure<R = unknown, P0 = unknown, P1 = unknown, P2 = cocoa.CDUnknownBlockType, P3 = cocoa.CDUnknownBlockType, P4 = cocoa.CDUnknownBlockType>(_getObjectWithPath: P0, _outputStream: P1, _progress: P2, _success: P3, _failure: P4): R;
    getObjectWithPath_progress_success_failure<R = unknown, P0 = unknown, P1 = cocoa.CDUnknownBlockType, P2 = cocoa.CDUnknownBlockType, P3 = cocoa.CDUnknownBlockType>(_getObjectWithPath: P0, _progress: P1, _success: P2, _failure: P3): R;
    headObjectWithPath_success_failure<R = unknown, P0 = unknown, P1 = cocoa.CDUnknownBlockType, P2 = cocoa.CDUnknownBlockType>(_headObjectWithPath: P0, _success: P1, _failure: P2): R;
    deleteBucket_success_failure<R = unknown, P0 = unknown, P1 = cocoa.CDUnknownBlockType, P2 = cocoa.CDUnknownBlockType>(_deleteBucket: P0, _success: P1, _failure: P2): R;
    putBucket_parameters_success_failure<R = unknown, P0 = unknown, P1 = unknown, P2 = cocoa.CDUnknownBlockType, P3 = cocoa.CDUnknownBlockType>(_putBucket: P0, _parameters: P1, _success: P2, _failure: P3): R;
    getBucket_success_failure<R = unknown, P0 = unknown, P1 = cocoa.CDUnknownBlockType, P2 = cocoa.CDUnknownBlockType>(_getBucket: P0, _success: P1, _failure: P2): R;
    getServiceWithSuccess_failure<R = unknown, P0 = cocoa.CDUnknownBlockType, P1 = cocoa.CDUnknownBlockType>(_getServiceWithSuccess: P0, _failure: P1): R;
    enqueueS3RequestOperationWithMethod_path_parameters_success_failure<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = cocoa.CDUnknownBlockType, P4 = cocoa.CDUnknownBlockType>(_enqueueS3RequestOperationWithMethod: P0, _path: P1, _parameters: P2, _success: P3, _failure: P4): R;
    initWithAccessKeyID_secret<R = unknown, P0 = unknown, P1 = unknown>(_initWithAccessKeyID: P0, _secret: P1): R;
    baseURL<R = cocoa.NSURL>(): R;
    setBaseURL<R = void, P0 = cocoa.NSURL>(_v: P0): R;
    requestSerializer<R = cocoa.AFURLRequestSerialization>(): R;
    setRequestSerializer<R = void, P0 = cocoa.AFURLRequestSerialization>(_v: P0): R;
  }
  namespace classes {
    export interface AFAmazonS3Manager<T = any> extends cocoa.classes.AFHTTPRequestOperationManager, cocoa.classes.NSSecureCodingProtocol, cocoa.classes.NSCopyingProtocol {
      alloc<R = AFAmazonS3Manager>(): R;
      new: <R = AFAmazonS3Manager>() => R;
      keyPathsForValuesAffectingBaseURL<R = unknown>(): R;
    }
  }
}

declare const AFAmazonS3Manager: cocoa.classes.AFAmazonS3Manager;
