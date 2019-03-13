/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSUndoLightInvocation<T = any> extends _NSUndoObject {
    description<R = unknown>(): R;
    _argument<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithTarget_selector_object<R = unknown, P0 = unknown, P1 = string, P2 = unknown>(_initWithTarget: P0, _selector: P1, _object: P2): R;
  }
  namespace classes {
    export interface _NSUndoLightInvocation<T = any> extends _NSUndoObject {
      alloc<R = _NSUndoLightInvocation>(): R;
      new: <R = _NSUndoLightInvocation>() => R;
    }
  }
}
