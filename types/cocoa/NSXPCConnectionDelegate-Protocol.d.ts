/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXPCConnectionDelegateProtocol<T = any> extends cocoa.NSObjectProtocol {
    connection_handleInvocation_isReply<R = void, P0 = cocoa.NSXPCConnection, P1 = cocoa.NSInvocation, P2 = boolean>(_connection: P0, _handleInvocation: P1, _isReply: P2): R;
    replacementObjectForXPCConnection_encoder_object<R = cocoa.NSSecureCoding, P0 = cocoa.NSXPCConnection, P1 = cocoa.NSXPCCoder, P2 = unknown>(_replacementObjectForXPCConnection: P0, _encoder: P1, _object: P2): R;
  }
  namespace classes {
    export interface NSXPCConnectionDelegateProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSXPCConnectionDelegateProtocol: cocoa.classes.NSXPCConnectionDelegateProtocol;
