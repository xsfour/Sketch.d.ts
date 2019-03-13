/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBinderPluginRegistry<T = any> extends NSObject {
    pluginClassForObject_andBinderClass_requiredPluginProtocol<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_pluginClassForObject: P0, _andBinderClass: P1, _requiredPluginProtocol: P2): R;
    registerPluginClass_forObjectClass_andBinderClass<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_registerPluginClass: P0, _forObjectClass: P1, _andBinderClass: P2): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface _NSBinderPluginRegistry<T = any> extends NSObject {
      alloc<R = _NSBinderPluginRegistry>(): R;
      new: <R = _NSBinderPluginRegistry>() => R;
      sharedRegistry<R = unknown>(): R;
    }
  }
}
