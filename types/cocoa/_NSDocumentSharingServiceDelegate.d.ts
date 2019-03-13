/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDocumentSharingServiceDelegate<T = any> extends NSObject, NSCloudSharingServiceDelegateProtocol {
    cxx_destruct<R = void>(): R;
    dealloc<R = void>(): R;
    initWithAnchoringView<R = unknown, P0 = unknown>(_initWithAnchoringView: P0): R;
    initWithDocument_delegate_completionHandler<R = unknown, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType>(_initWithDocument: P0, _delegate: P1, _completionHandler: P2): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSDocumentSharingServiceDelegate<T = any> extends NSObject, NSCloudSharingServiceDelegateProtocol {
      alloc<R = _NSDocumentSharingServiceDelegate>(): R;
      new: <R = _NSDocumentSharingServiceDelegate>() => R;
    }
  }
}
