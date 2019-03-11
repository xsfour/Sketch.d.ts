/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSChangeFlowAnimationFromBottomAnimationAction<T = any> extends cocoa.MSChangeFlowAnimationAction {
    label<R = unknown>(): R;
    changeFlowAnimationToFromBottomAnimation<R = void, P0 = unknown>(_changeFlowAnimationToFromBottomAnimation: P0): R;
  }
  namespace classes {
    export interface MSChangeFlowAnimationFromBottomAnimationAction<T = any> extends cocoa.classes.MSChangeFlowAnimationAction {
      alloc<R = MSChangeFlowAnimationFromBottomAnimationAction>(): R;
      new: <R = MSChangeFlowAnimationFromBottomAnimationAction>() => R;
    }
  }
}

declare const MSChangeFlowAnimationFromBottomAnimationAction: cocoa.classes.MSChangeFlowAnimationFromBottomAnimationAction;
