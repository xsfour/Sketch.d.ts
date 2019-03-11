/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SMKConnection<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    didReceiveData<R = void, P0 = unknown>(_didReceiveData: P0): R;
    sendData<R = void, P0 = unknown>(_sendData: P0): R;
    close<R = void>(): R;
    connect<R = void>(): R;
    dealloc<R = void>(): R;
    resourceHost<R = cocoa.NSString>(): R;
    status<R = number>(): R;
    setStatus<R = void, P0 = number>(_v: P0): R;
    advertisement<R = cocoa.NSDictionary>(): R;
    queue<R = cocoa.OS_dispatch_queue>(): R;
    error<R = cocoa.NSError>(): R;
    UUID<R = cocoa.NSUUID>(): R;
    connectionType<R = number>(): R;
    connectionInfo<R = cocoa.SMKConnectionInfo>(): R;
  }
  namespace classes {
    export interface SMKConnection<T = any> extends cocoa.classes.NSObject {
      alloc<R = SMKConnection>(): R;
      new: <R = SMKConnection>() => R;
    }
  }
}

declare const SMKConnection: cocoa.classes.SMKConnection;
