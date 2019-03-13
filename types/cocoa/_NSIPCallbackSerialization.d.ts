/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSIPCallbackSerialization<T = any> extends NSObject {
    sendEndBlock<R = void, P0 = CDUnknownBlockType>(_sendEndBlock: P0): R;
    sendBeginBlock<R = void, P0 = CDUnknownBlockType>(_sendBeginBlock: P0): R;
    dealloc<R = void>(): R;
    UUID<R = NSUUID>(): R;
    setUUID<R = void, P0 = NSUUID>(_v: P0): R;
  }
  namespace classes {
    export interface _NSIPCallbackSerialization<T = any> extends NSObject {
      alloc<R = _NSIPCallbackSerialization>(): R;
      new: <R = _NSIPCallbackSerialization>() => R;
    }
  }
}
