/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToggleFillAction<T = any> extends cocoa.MSToggleStylePartAction {
    label<R = unknown>(): R;
    toggleFill<R = void, P0 = unknown>(_toggleFill: P0): R;
  }
  namespace classes {
    export interface MSToggleFillAction<T = any> extends cocoa.classes.MSToggleStylePartAction {
      alloc<R = MSToggleFillAction>(): R;
      new: <R = MSToggleFillAction>() => R;
    }
  }
}

declare const MSToggleFillAction: cocoa.classes.MSToggleFillAction;
