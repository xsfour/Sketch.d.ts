/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCommandeeringMap<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    handler<R = cocoa.CDUnknownBlockType>(): R;
    setHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    observerID<R = unknown>(): R;
    setObserverID<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace classes {
    export interface _NSCommandeeringMap<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSCommandeeringMap>(): R;
      new: <R = _NSCommandeeringMap>() => R;
    }
  }
}
