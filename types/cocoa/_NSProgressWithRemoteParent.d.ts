/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSProgressWithRemoteParent<T = any> extends cocoa.NSProgress {
    sequence<R = number>(): R;
    setSequence<R = void, P0 = number>(_v: P0): R;
    parentConnection<R = cocoa.NSXPCConnection>(): R;
    setParentConnection<R = void, P0 = cocoa.NSXPCConnection>(_v: P0): R;
  }
  namespace classes {
    export interface _NSProgressWithRemoteParent<T = any> extends cocoa.classes.NSProgress {
      alloc<R = _NSProgressWithRemoteParent>(): R;
      new: <R = _NSProgressWithRemoteParent>() => R;
    }
  }
}
