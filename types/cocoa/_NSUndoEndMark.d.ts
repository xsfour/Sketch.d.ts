/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSUndoEndMark<T = any> extends cocoa._NSUndoObject {
    description<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSUndoEndMark<T = any> extends cocoa.classes._NSUndoObject {
      alloc<R = _NSUndoEndMark>(): R;
      new: <R = _NSUndoEndMark>() => R;
    }
  }
}
