/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSXPCConnectionImportInfo<T = any> extends NSObject {
    _valueForEntitlement_auditToken<R = unknown, P0 = unknown, P1 = unknown>(__valueForEntitlement: P0, _auditToken: P1): R;
    removeProxy<R = boolean, P0 = unknown>(_removeProxy: P0): R;
    addProxy<R = void, P0 = unknown>(_addProxy: P0): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface _NSXPCConnectionImportInfo<T = any> extends NSObject {
      alloc<R = _NSXPCConnectionImportInfo>(): R;
      new: <R = _NSXPCConnectionImportInfo>() => R;
    }
  }
}
