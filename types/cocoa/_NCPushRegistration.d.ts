/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NCPushRegistration<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    _messageServerRemotePush<R = void, P0 = unknown>(__messageServerRemotePush: P0): R;
    _messageServerTokenUpdated<R = void, P0 = unknown>(__messageServerTokenUpdated: P0): R;
    _messageRegistrationFailed<R = void, P0 = unknown>(__messageRegistrationFailed: P0): R;
    _handleIncomingToken<R = void, P0 = unknown>(__handleIncomingToken: P0): R;
    _server_connection<R = unknown>(): R;
    _endpoint<R = unknown>(): R;
    _send_connection_authentication<R = void>(): R;
    _server_connect<R = void>(): R;
    _server_did_come_alive<R = void, P0 = unknown>(__server_did_come_alive: P0): R;
    unregister<R = void>(): R;
    initWithTypes_delegate<R = unknown, P0 = number, P1 = unknown>(_initWithTypes: P0, _delegate: P1): R;
    types<R = number>(): R;
    setTypes<R = void, P0 = number>(_v: P0): R;
    delegate<R = NCPushRegistrationDelegate>(): R;
    setDelegate<R = void, P0 = NCPushRegistrationDelegate>(_v: P0): R;
    token<R = NSData>(): R;
    setToken<R = void, P0 = NSData>(_v: P0): R;
  }
  namespace classes {
    export interface _NCPushRegistration<T = any> extends NSObject {
      alloc<R = _NCPushRegistration>(): R;
      new: <R = _NCPushRegistration>() => R;
    }
  }
}
