/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSJoinAction<T = any> extends MSDocumentAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    joinPath_withPath<R = unknown, P0 = unknown, P1 = unknown>(_joinPath: P0, _withPath: P1): R;
    historyMomentTitle<R = unknown>(): R;
    join<R = void, P0 = unknown>(_join: P0): R;
  }
  namespace classes {
    export interface MSJoinAction<T = any> extends MSDocumentAction {
      alloc<R = MSJoinAction>(): R;
      new: <R = MSJoinAction>() => R;
    }
  }
}

declare const MSJoinAction: cocoa.classes.MSJoinAction;
