/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAddFlowHomeAction<T = any> extends MSFlowBaseAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    addFlowHome<R = void, P0 = unknown>(_addFlowHome: P0): R;
  }
  namespace classes {
    export interface MSAddFlowHomeAction<T = any> extends MSFlowBaseAction {
      alloc<R = MSAddFlowHomeAction>(): R;
      new: <R = MSAddFlowHomeAction>() => R;
    }
  }
}

declare const MSAddFlowHomeAction: cocoa.classes.MSAddFlowHomeAction;
