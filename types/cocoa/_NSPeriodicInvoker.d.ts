/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPeriodicInvoker<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    cancel<R = void>(): R;
    setWorkBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_setWorkBlock: P0): R;
    setDelayFunction<R = void, P0 = cocoa.CDUnknownBlockType>(_setDelayFunction: P0): R;
  }
  namespace classes {
    export interface _NSPeriodicInvoker<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSPeriodicInvoker>(): R;
      new: <R = _NSPeriodicInvoker>() => R;
    }
  }
}
