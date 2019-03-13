/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDisguisedObjectValue<T = any> extends NSObject {
    dealloc<R = void>(): R;
    initWithObject<R = unknown, P0 = unknown>(_initWithObject: P0): R;
    objectValue<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSDisguisedObjectValue<T = any> extends NSObject {
      alloc<R = _NSDisguisedObjectValue>(): R;
      new: <R = _NSDisguisedObjectValue>() => R;
      conditionallyReveal_object<R = unknown, P0 = boolean, P1 = unknown>(_conditionallyReveal: P0, _object: P1): R;
      conditionallyDisguise_object<R = unknown, P0 = boolean, P1 = unknown>(_conditionallyDisguise: P0, _object: P1): R;
    }
  }
}
