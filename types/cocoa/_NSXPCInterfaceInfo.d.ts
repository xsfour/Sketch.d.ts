/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSXPCInterfaceInfo<T = any> extends NSObject {
    dealloc<R = void>(): R;
    remoteVersion<R = number>(): R;
    setRemoteVersion<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _NSXPCInterfaceInfo<T = any> extends NSObject {
      alloc<R = _NSXPCInterfaceInfo>(): R;
      new: <R = _NSXPCInterfaceInfo>() => R;
    }
  }
}
