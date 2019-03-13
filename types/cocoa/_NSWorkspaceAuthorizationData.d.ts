/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSWorkspaceAuthorizationData<T = any> extends NSObject {
    dealloc<R = void>(): R;
    initWithAuth_externalForm_type<R = unknown, P0 = AuthorizationOpaqueRef, P1 = unknown, P2 = number>(_initWithAuth: P0, _externalForm: P1, _type: P2): R;
    type<R = number>(): R;
    auth<R = AuthorizationOpaqueRef>(): R;
    authExt<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSWorkspaceAuthorizationData<T = any> extends NSObject {
      alloc<R = _NSWorkspaceAuthorizationData>(): R;
      new: <R = _NSWorkspaceAuthorizationData>() => R;
    }
  }
}
