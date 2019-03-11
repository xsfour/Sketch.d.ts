/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface __NSObserver<T = any> extends cocoa.NSObject {
    _doit<R = void, P0 = unknown>(__doit: P0): R;
    object<R = unknown>(): R;
    name<R = unknown>(): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface __NSObserver<T = any> extends cocoa.classes.NSObject {
      alloc<R = __NSObserver>(): R;
      new: <R = __NSObserver>() => R;
      forgetObserver<R = void, P0 = unknown>(_forgetObserver: P0): R;
      isAnObserver<R = boolean, P0 = unknown>(_isAnObserver: P0): R;
      observerWithCenter_queue_name_object_block<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = cocoa.CDUnknownBlockType>(_observerWithCenter: P0, _queue: P1, _name: P2, _object: P3, _block: P4): R;
    }
  }
}
