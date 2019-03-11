/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSUndoObject<T = any> extends cocoa.NSObject {
    target<R = unknown>(): R;
    invoke<R = void>(): R;
    isEndMark<R = boolean>(): R;
    isBeginMark<R = boolean>(): R;
    initWithTarget<R = unknown, P0 = unknown>(_initWithTarget: P0): R;
  }
  namespace classes {
    export interface _NSUndoObject<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSUndoObject>(): R;
      new: <R = _NSUndoObject>() => R;
    }
  }
}
