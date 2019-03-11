/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSExtensionContext<T = any> extends cocoa.NSObject, cocoa.NSSecureCodingProtocol, cocoa.NSCopyingProtocol, cocoa.NSXPCListenerDelegateProtocol, cocoa._NSExtensionAuxHostingBaseProtocol {
    didConnectToVendor<R = void, P0 = unknown>(_didConnectToVendor: P0): R;
    _willPerformHostCallback<R = void, P0 = cocoa.CDUnknownBlockType>(__willPerformHostCallback: P0): R;
    _openURL_completion<R = void, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(__openURL: P0, _completion: P1): R;
    _loadPreviewImageForPayload_completionHandler<R = void, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(__loadPreviewImageForPayload: P0, _completionHandler: P1): R;
    _loadItemForPayload_completionHandler<R = void, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(__loadItemForPayload: P0, _completionHandler: P1): R;
    openURL_completionHandler<R = void, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_openURL: P0, _completionHandler: P1): R;
    cancelRequestWithError<R = void, P0 = unknown>(_cancelRequestWithError: P0): R;
    completeRequestReturningItems_completionHandler<R = void, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_completeRequestReturningItems: P0, _completionHandler: P1): R;
    _completeRequestReturningItemsSecondHalf<R = void, P0 = cocoa.CDUnknownBlockType>(__completeRequestReturningItemsSecondHalf: P0): R;
    _isHost<R = boolean>(): R;
    dealloc<R = void>(): R;
    invalidate<R = void>(): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    initWithInputItems<R = unknown, P0 = unknown>(_initWithInputItems: P0): R;
    initWithInputItems_contextUUID<R = unknown, P0 = unknown, P1 = unknown>(_initWithInputItems: P0, _contextUUID: P1): R;
    initWithInputItems_listenerEndpoint_contextUUID<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithInputItems: P0, _listenerEndpoint: P1, _contextUUID: P2): R;
    _derivedExtensionAuxiliaryHostProtocol<R = unknown>(): R;
    _extensionHostAuditToken<R = unknown>(): R;
    set_extensionHostAuditToken<R = void, P0 = unknown>(_v: P0): R;
    _transaction<R = cocoa.OS_os_transaction>(): R;
    set_transaction<R = void, P0 = cocoa.OS_os_transaction>(_v: P0): R;
    _dummyExtension<R = boolean>(): R;
    set_dummyExtension<R = void, P0 = boolean>(_v: P0): R;
    _principalObject<R = unknown>(): R;
    set_principalObject<R = void, P0 = unknown>(_v: P0): R;
    _processAssertion<R = unknown>(): R;
    set_processAssertion<R = void, P0 = unknown>(_v: P0): R;
    _auxiliaryListener<R = cocoa.NSXPCListener>(): R;
    set_auxiliaryListener<R = void, P0 = cocoa.NSXPCListener>(_v: P0): R;
    _auxiliaryConnection<R = cocoa.NSXPCConnection>(): R;
    set_auxiliaryConnection<R = void, P0 = cocoa.NSXPCConnection>(_v: P0): R;
    _extensionVendorProxy<R = cocoa._NSExtensionContextVending>(): R;
    set_extensionVendorProxy<R = void, P0 = cocoa._NSExtensionContextVending>(_v: P0): R;
    _extensionHostProxy<R = cocoa._NSExtensionContextHosting>(): R;
    set_extensionHostProxy<R = void, P0 = cocoa._NSExtensionContextHosting>(_v: P0): R;
    _requestCleanUpBlock<R = cocoa.CDUnknownBlockType>(): R;
    set_requestCleanUpBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    _UUID<R = cocoa.NSUUID>(): R;
    set_UUID<R = void, P0 = cocoa.NSUUID>(_v: P0): R;
    inputItems<R = cocoa.NSArray>(): R;
    setInputItems<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    description<R = cocoa.NSString>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSExtensionContext<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSSecureCodingProtocol, cocoa.classes.NSCopyingProtocol, cocoa.classes.NSXPCListenerDelegateProtocol, cocoa.classes._NSExtensionAuxHostingBaseProtocol {
      alloc<R = NSExtensionContext>(): R;
      new: <R = NSExtensionContext>() => R;
      _allowedErrorClasses<R = unknown>(): R;
      _extensionAuxiliaryVendorProtocol<R = unknown>(): R;
      _extensionAuxiliaryHostProtocol<R = unknown>(): R;
      _extensionContextVendorProtocolWithAllowedErrorClasses<R = unknown, P0 = unknown>(__extensionContextVendorProtocolWithAllowedErrorClasses: P0): R;
      _defaultExtensionContextVendorProtocol<R = unknown>(): R;
      _extensionContextHostProtocolWithAllowedErrorClasses<R = unknown, P0 = unknown>(__extensionContextHostProtocolWithAllowedErrorClasses: P0): R;
      _defaultExtensionContextProtocol<R = unknown>(): R;
      _extensionContextHostProtocolAllowedClassesForItems<R = unknown>(): R;
      _extensionContextForIdentifier<R = unknown, P0 = unknown>(__extensionContextForIdentifier: P0): R;
    }
  }
}

declare const NSExtensionContext: cocoa.classes.NSExtensionContext;
