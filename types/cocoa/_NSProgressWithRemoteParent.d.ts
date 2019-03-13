/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSProgressWithRemoteParent<T = any> extends NSProgress {
    sequence<R = number>(): R;
    setSequence<R = void, P0 = number>(_v: P0): R;
    parentConnection<R = NSXPCConnection>(): R;
    setParentConnection<R = void, P0 = NSXPCConnection>(_v: P0): R;
  }
  namespace classes {
    export interface _NSProgressWithRemoteParent<T = any> extends NSProgress {
      alloc<R = _NSProgressWithRemoteParent>(): R;
      new: <R = _NSProgressWithRemoteParent>() => R;
    }
  }
}
