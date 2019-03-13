/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSStringAndClassInfo<T = any> extends NSObject, NSCopyingProtocol {
    setObjectClass<R = void, P0 = unknown>(_setObjectClass: P0): R;
    setRegistryString<R = void, P0 = unknown>(_setRegistryString: P0): R;
    description<R = unknown>(): R;
    hash<R = number>(): R;
    dealloc<R = void>(): R;
    initWithRegistryString_andObjectClass<R = unknown, P0 = unknown, P1 = unknown>(_initWithRegistryString: P0, _andObjectClass: P1): R;
  }
  namespace classes {
    export interface _NSStringAndClassInfo<T = any> extends NSObject, NSCopyingProtocol {
      alloc<R = _NSStringAndClassInfo>(): R;
      new: <R = _NSStringAndClassInfo>() => R;
    }
  }
}
