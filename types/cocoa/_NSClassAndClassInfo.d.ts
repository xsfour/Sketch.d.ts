/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSClassAndClassInfo<T = any> extends NSObject, NSCopyingProtocol {
    setObjectClass<R = void, P0 = unknown>(_setObjectClass: P0): R;
    setRegistryClass<R = void, P0 = unknown>(_setRegistryClass: P0): R;
    description<R = unknown>(): R;
    hash<R = number>(): R;
    initWithRegistryClass_andObjectClass<R = unknown, P0 = unknown, P1 = unknown>(_initWithRegistryClass: P0, _andObjectClass: P1): R;
  }
  namespace classes {
    export interface _NSClassAndClassInfo<T = any> extends NSObject, NSCopyingProtocol {
      alloc<R = _NSClassAndClassInfo>(): R;
      new: <R = _NSClassAndClassInfo>() => R;
    }
  }
}
