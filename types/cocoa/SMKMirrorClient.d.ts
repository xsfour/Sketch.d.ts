/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SMKMirrorClient<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    type<R = number>(): R;
    setType<R = void, P0 = number>(_v: P0): R;
    status<R = number>(): R;
    setStatus<R = void, P0 = number>(_v: P0): R;
    advertisement<R = cocoa.SMKAdvertisement>(): R;
    setAdvertisement<R = void, P0 = cocoa.SMKAdvertisement>(_v: P0): R;
    connectionID<R = cocoa.NSUUID>(): R;
    setConnectionID<R = void, P0 = cocoa.NSUUID>(_v: P0): R;
  }
  namespace classes {
    export interface SMKMirrorClient<T = any> extends cocoa.classes.NSObject {
      alloc<R = SMKMirrorClient>(): R;
      new: <R = SMKMirrorClient>() => R;
      clientWithConnectionInfo<R = unknown, P0 = unknown>(_clientWithConnectionInfo: P0): R;
    }
  }
}

declare const SMKMirrorClient: cocoa.classes.SMKMirrorClient;
