/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCustomObject<T = any> extends NSObject, NSCodingProtocol {
    setClassName<R = void, P0 = unknown>(_setClassName: P0): R;
    className<R = unknown>(): R;
    setObject<R = void, P0 = unknown>(_setObject: P0): R;
    nibInstantiate<R = unknown>(): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface NSCustomObject<T = any> extends NSObject, NSCodingProtocol {
      alloc<R = NSCustomObject>(): R;
      new: <R = NSCustomObject>() => R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSCustomObject: cocoa.classes.NSCustomObject;
