/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSChangeFlowAnimationFromTopAnimationAction<T = any> extends MSChangeFlowAnimationAction {
    label<R = unknown>(): R;
    changeFlowAnimationToFromTopAnimation<R = void, P0 = unknown>(_changeFlowAnimationToFromTopAnimation: P0): R;
  }
  namespace classes {
    export interface MSChangeFlowAnimationFromTopAnimationAction<T = any> extends MSChangeFlowAnimationAction {
      alloc<R = MSChangeFlowAnimationFromTopAnimationAction>(): R;
      new: <R = MSChangeFlowAnimationFromTopAnimationAction>() => R;
    }
  }
}

declare const MSChangeFlowAnimationFromTopAnimationAction: cocoa.classes.MSChangeFlowAnimationFromTopAnimationAction;
