/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSExtensionContextVendingProtocol<T = any> extends cocoa.NSObjectProtocol {
    _beginRequestWithExtensionItems_listenerEndpoint_withContextUUID_completion<R = void, P0 = cocoa.NSArray, P1 = cocoa.NSXPCListenerEndpoint, P2 = cocoa.NSUUID, P3 = cocoa.CDUnknownBlockType>(__beginRequestWithExtensionItems: P0, _listenerEndpoint: P1, _withContextUUID: P2, _completion: P3): R;
  }
  namespace classes {
    export interface _NSExtensionContextVendingProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}
