/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSIPCallbackSerialization<T = any> extends cocoa.NSObject {
    sendEndBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_sendEndBlock: P0): R;
    sendBeginBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_sendBeginBlock: P0): R;
    dealloc<R = void>(): R;
    UUID<R = cocoa.NSUUID>(): R;
    setUUID<R = void, P0 = cocoa.NSUUID>(_v: P0): R;
  }
  namespace classes {
    export interface _NSIPCallbackSerialization<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSIPCallbackSerialization>(): R;
      new: <R = _NSIPCallbackSerialization>() => R;
    }
  }
}
