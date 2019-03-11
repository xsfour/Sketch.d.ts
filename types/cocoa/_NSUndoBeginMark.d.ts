/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSUndoBeginMark<T = any> extends cocoa._NSUndoObject {
    description<R = unknown>(): R;
    setDiscardable<R = void, P0 = boolean>(_setDiscardable: P0): R;
    isDiscardable<R = boolean>(): R;
    groupIdentifier<R = unknown>(): R;
    setGroupIdentifier<R = void, P0 = unknown>(_setGroupIdentifier: P0): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface _NSUndoBeginMark<T = any> extends cocoa.classes._NSUndoObject {
      alloc<R = _NSUndoBeginMark>(): R;
      new: <R = _NSUndoBeginMark>() => R;
    }
  }
}
