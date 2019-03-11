/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSExtensionContextVendor<T = any> extends cocoa.NSObject, cocoa.NSXPCListenerDelegateProtocol, cocoa._NSExtensionContextVendingProtocol {
    _setPrincipalObject_forUUID<R = void, P0 = unknown, P1 = unknown>(__setPrincipalObject: P0, _forUUID: P1): R;
    _extensionContextForUUID<R = unknown, P0 = unknown>(__extensionContextForUUID: P0): R;
    _tearDownContextWithUUID<R = void, P0 = unknown>(__tearDownContextWithUUID: P0): R;
    _shouldCreatePrincipalObject<R = boolean>(): R;
    dealloc<R = void>(): R;
    _extensionPrincipalObjects<R = cocoa.NSMutableDictionary>(): R;
    set_extensionPrincipalObjects<R = void, P0 = cocoa.NSMutableDictionary>(_v: P0): R;
    _extensionContexts<R = cocoa.NSMutableDictionary>(): R;
    set_extensionContexts<R = void, P0 = cocoa.NSMutableDictionary>(_v: P0): R;
    _extensionServiceConnections<R = cocoa.NSMutableDictionary>(): R;
    set_extensionServiceConnections<R = void, P0 = cocoa.NSMutableDictionary>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSExtensionContextVendor<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSXPCListenerDelegateProtocol, cocoa.classes._NSExtensionContextVendingProtocol {
      alloc<R = _NSExtensionContextVendor>(): R;
      new: <R = _NSExtensionContextVendor>() => R;
      _expirationConcurrentQueue<R = unknown>(): R;
      _completionConcurrentQueue<R = unknown>(): R;
      _extensionContextClass<R = unknown>(): R;
      _extensionMainStoryboard<R = unknown>(): R;
      _extensionPrincipalClass<R = unknown>(): R;
      _extensionDictionary<R = unknown>(): R;
      _startListening<R = void>(): R;
      _sharedExtensionContextVendor<R = unknown>(): R;
    }
  }
}
