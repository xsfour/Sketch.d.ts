/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFollowFlowAction<T = any> extends cocoa.MSFlowBaseAction {
    label<R = unknown>(): R;
    followFlow<R = void, P0 = unknown>(_followFlow: P0): R;
    validate<R = boolean>(): R;
  }
  namespace classes {
    export interface MSFollowFlowAction<T = any> extends cocoa.classes.MSFlowBaseAction {
      alloc<R = MSFollowFlowAction>(): R;
      new: <R = MSFollowFlowAction>() => R;
    }
  }
}

declare const MSFollowFlowAction: cocoa.classes.MSFollowFlowAction;
