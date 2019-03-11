/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDistributeHorizontallyAction<T = any> extends cocoa.MSDistributeAction {
    label<R = unknown>(): R;
    historyMomentTitle<R = unknown>(): R;
    distributeHorizontally<R = void, P0 = unknown>(_distributeHorizontally: P0): R;
  }
  namespace classes {
    export interface MSDistributeHorizontallyAction<T = any> extends cocoa.classes.MSDistributeAction {
      alloc<R = MSDistributeHorizontallyAction>(): R;
      new: <R = MSDistributeHorizontallyAction>() => R;
    }
  }
}

declare const MSDistributeHorizontallyAction: cocoa.classes.MSDistributeHorizontallyAction;
