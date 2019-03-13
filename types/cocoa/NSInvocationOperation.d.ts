/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSInvocationOperation<T = any> extends NSOperation {
    initWithInvocation<R = unknown, P0 = unknown>(_initWithInvocation: P0): R;
    initWithTarget_selector_object<R = unknown, P0 = unknown, P1 = string, P2 = unknown>(_initWithTarget: P0, _selector: P1, _object: P2): R;
    result<R = unknown>(): R;
    invocation<R = NSInvocation>(): R;
  }
  namespace classes {
    export interface NSInvocationOperation<T = any> extends NSOperation {
      alloc<R = NSInvocationOperation>(): R;
      new: <R = NSInvocationOperation>() => R;
    }
  }
}

declare const NSInvocationOperation: cocoa.classes.NSInvocationOperation;
