/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSWorkspaceAuthorizationData<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    initWithAuth_externalForm_type<R = unknown, P0 = cocoa.AuthorizationOpaqueRef, P1 = unknown, P2 = number>(_initWithAuth: P0, _externalForm: P1, _type: P2): R;
    type<R = number>(): R;
    auth<R = cocoa.AuthorizationOpaqueRef>(): R;
    authExt<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSWorkspaceAuthorizationData<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSWorkspaceAuthorizationData>(): R;
      new: <R = _NSWorkspaceAuthorizationData>() => R;
    }
  }
}
