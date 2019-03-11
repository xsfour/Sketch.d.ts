/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDistributeVerticallyAction<T = any> extends cocoa.MSDistributeAction {
    label<R = unknown>(): R;
    historyMomentTitle<R = unknown>(): R;
    distributeVertically<R = void, P0 = unknown>(_distributeVertically: P0): R;
  }
  namespace classes {
    export interface MSDistributeVerticallyAction<T = any> extends cocoa.classes.MSDistributeAction {
      alloc<R = MSDistributeVerticallyAction>(): R;
      new: <R = MSDistributeVerticallyAction>() => R;
    }
  }
}

declare const MSDistributeVerticallyAction: cocoa.classes.MSDistributeVerticallyAction;
