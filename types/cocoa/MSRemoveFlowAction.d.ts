/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRemoveFlowAction<T = any> extends cocoa.MSFlowBaseAction {
    label<R = unknown>(): R;
    hasDynamicTitle<R = boolean>(): R;
    validate<R = boolean>(): R;
    removeFlow<R = void, P0 = unknown>(_removeFlow: P0): R;
  }
  namespace classes {
    export interface MSRemoveFlowAction<T = any> extends cocoa.classes.MSFlowBaseAction {
      alloc<R = MSRemoveFlowAction>(): R;
      new: <R = MSRemoveFlowAction>() => R;
    }
  }
}

declare const MSRemoveFlowAction: cocoa.classes.MSRemoveFlowAction;
