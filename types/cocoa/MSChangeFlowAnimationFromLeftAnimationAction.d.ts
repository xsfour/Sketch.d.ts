/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSChangeFlowAnimationFromLeftAnimationAction<T = any> extends MSChangeFlowAnimationAction {
    label<R = unknown>(): R;
    changeFlowAnimationToFromLeftAnimation<R = void, P0 = unknown>(_changeFlowAnimationToFromLeftAnimation: P0): R;
  }
  namespace classes {
    export interface MSChangeFlowAnimationFromLeftAnimationAction<T = any> extends MSChangeFlowAnimationAction {
      alloc<R = MSChangeFlowAnimationFromLeftAnimationAction>(): R;
      new: <R = MSChangeFlowAnimationFromLeftAnimationAction>() => R;
    }
  }
}

declare const MSChangeFlowAnimationFromLeftAnimationAction: cocoa.classes.MSChangeFlowAnimationFromLeftAnimationAction;
