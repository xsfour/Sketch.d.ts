/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCloudSharingServiceDelegate<T = any> extends cocoa.NSObject, cocoa.NSCloudSharingServiceDelegateProtocol {
    dealloc<R = void>(): R;
    initWithService_parentWindowProvider_completionHandler<R = unknown, P0 = unknown, P1 = cocoa.CDUnknownBlockType, P2 = cocoa.CDUnknownBlockType>(_initWithService: P0, _parentWindowProvider: P1, _completionHandler: P2): R;
    preShareFailureMeansStopSharing<R = boolean>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSCloudSharingServiceDelegate<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCloudSharingServiceDelegateProtocol {
      alloc<R = _NSCloudSharingServiceDelegate>(): R;
      new: <R = _NSCloudSharingServiceDelegate>() => R;
    }
  }
}
