/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAddFlowBackAction<T = any> extends MSFlowBaseAction {
    label<R = unknown>(): R;
    addFlowBack<R = void, P0 = unknown>(_addFlowBack: P0): R;
    validate<R = boolean>(): R;
  }
  namespace classes {
    export interface MSAddFlowBackAction<T = any> extends MSFlowBaseAction {
      alloc<R = MSAddFlowBackAction>(): R;
      new: <R = MSAddFlowBackAction>() => R;
    }
  }
}

declare const MSAddFlowBackAction: cocoa.classes.MSAddFlowBackAction;
