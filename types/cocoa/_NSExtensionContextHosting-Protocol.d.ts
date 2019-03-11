/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSExtensionContextHostingProtocol<T = any> extends cocoa.NSObjectProtocol {
    _openURL_completion<R = void, P0 = cocoa.NSURL, P1 = cocoa.CDUnknownBlockType>(__openURL: P0, _completion: P1): R;
    _loadPreviewImageForPayload_contextIdentifier_completionHandler<R = void, P0 = cocoa.NSDictionary, P1 = cocoa.NSUUID, P2 = cocoa.CDUnknownBlockType>(__loadPreviewImageForPayload: P0, _contextIdentifier: P1, _completionHandler: P2): R;
    _loadItemForPayload_contextIdentifier_completionHandler<R = void, P0 = cocoa.NSDictionary, P1 = cocoa.NSUUID, P2 = cocoa.CDUnknownBlockType>(__loadItemForPayload: P0, _contextIdentifier: P1, _completionHandler: P2): R;
    _cancelRequestWithError_forExtensionContextWithUUID_completion<R = void, P0 = cocoa.NSError, P1 = cocoa.NSUUID, P2 = cocoa.CDUnknownBlockType>(__cancelRequestWithError: P0, _forExtensionContextWithUUID: P1, _completion: P2): R;
    _completeRequestReturningItems_forExtensionContextWithUUID_completion<R = void, P0 = cocoa.NSArray, P1 = cocoa.NSUUID, P2 = cocoa.CDUnknownBlockType>(__completeRequestReturningItems: P0, _forExtensionContextWithUUID: P1, _completion: P2): R;
  }
  namespace classes {
    export interface _NSExtensionContextHostingProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}
