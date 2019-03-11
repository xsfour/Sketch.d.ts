/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSScissorsAction<T = any> extends cocoa.MSEventHandlerAction {
    tooltip<R = unknown>(): R;
    label<R = unknown>(): R;
    scissors<R = void, P0 = unknown>(_scissors: P0): R;
  }
  namespace classes {
    export interface MSScissorsAction<T = any> extends cocoa.classes.MSEventHandlerAction {
      alloc<R = MSScissorsAction>(): R;
      new: <R = MSScissorsAction>() => R;
    }
  }
}

declare const MSScissorsAction: cocoa.classes.MSScissorsAction;
