/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSUndoBlockInvocation<T = any> extends cocoa._NSUndoObject {
    dealloc<R = void>(): R;
    initWithTarget_handler<R = unknown, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_initWithTarget: P0, _handler: P1): R;
  }
  namespace classes {
    export interface _NSUndoBlockInvocation<T = any> extends cocoa.classes._NSUndoObject {
      alloc<R = _NSUndoBlockInvocation>(): R;
      new: <R = _NSUndoBlockInvocation>() => R;
    }
  }
}
